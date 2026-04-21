import { Response, NextFunction } from "express";

export type RequestHandlerType = (
    req: T,
    res: Response,
    next: NextFunction
) => Promise<any> | void;

export type RateLimitRecord = {
    count: number;
    startTime: number;
}