import express from 'express';
import { errorHandler } from './middleware/error-handler.middleware';
import userRouter from './router/user.router';

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

// last middleware in call stack
app.use(errorHandler);

export default app;