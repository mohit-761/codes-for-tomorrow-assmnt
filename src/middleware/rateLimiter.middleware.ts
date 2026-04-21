import { NextFunction, Request, Response } from "express";
import { rateLimiterStore } from "../utils/rateLimiterStore";
import { ApiResponse } from "../utils/ApiResponse";
import { getDataSource } from "../config/db.config";
import { User } from "../database/entities/user.entity";
import { ApiError } from "../utils/ApiError";

const USER_LIMIT = 5;
const IP_LIMIT = 20;

export const rateLimiter = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

   try{

     const userRepository = getDataSource.getRepository(User);

     const userIdHeader = req.header('userId');

     if(!userIdHeader) throw new ApiError(400, 'userId heaer is required');

     const userId = Number(userIdHeader);

     if(isNaN(userId))
        throw new ApiError(400, 'invalid userId');

     const ip = req.headers['x-forwarded-for']?.toString()?.split(",")[0] || req.socket.remoteAddress || "unknown";

     // check ip limit
     const isIpAllowed = rateLimiterStore.check(`ip:${ip}`, IP_LIMIT);

     if(!isIpAllowed){
        return res.status(429).json(new ApiResponse(
            429,
            'to many requests from this IP'
        ))
     }

     // check for user limit 
     if(userId){

        const user = await userRepository.findOne({
            where: {
                id: userId
            }
        })

        if(!user) throw new ApiError(
            401, 
            'invalid user id'
        )

        const isUserAllowed = rateLimiterStore.check(
            `user:${userId}`,
            USER_LIMIT
        );

        if(!isUserAllowed){
            return res.status(429).json(
                new ApiResponse(
                    429,
                    'Request Limit exceeded for this user id'
                )
            )
        }
     }

     next();

   }catch(error){

    next(error);

   }
}