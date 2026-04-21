import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";

export class UserController {
    private userService = new UserService();
    public saveUsers = asyncHandler(async(req: Request, res: Response) => {
        let data = await this.userService.addBulkUser();
        return res.status(200).json(new ApiResponse(200, 'user has been added', data));
    });

    public getData = asyncHandler((req: Request, res: Response) => {
        let data = this.userService.getData();
        res.status(200).json(new ApiResponse(
            200,
            'Data fetched successfully',
            data
        ))
    });
}