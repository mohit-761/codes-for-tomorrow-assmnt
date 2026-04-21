import express from 'express';
import { UserController } from '../controller/user.controller';
import { rateLimiter } from '../middleware/rateLimiter.middleware';

let userRouter = express.Router();
let userController = new UserController();

// dummy route to save users
userRouter.get('/bulk', userController.saveUsers);
userRouter.get('/get-data', rateLimiter, userController.getData);

export default userRouter;