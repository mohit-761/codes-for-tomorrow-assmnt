import { NextFunction, Request, Response } from "express";
import { RequestHandlerType } from "../types/req";

export function asyncHandler(requestHandler: RequestHandlerType){
    return (req: Request, res: Response, next: NextFunction) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
}