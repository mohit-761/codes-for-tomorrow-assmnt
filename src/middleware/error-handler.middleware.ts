import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction){
        let status = 500;
        if(error instanceof ApiError){
            status = error.statusCode;
        }
        let message = error.message || 'something went wrong, please try again.';
        return res.status(status).json(new ApiResponse(status, message, null));
}