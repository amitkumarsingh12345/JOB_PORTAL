import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/conn.js';
import router from './routes/testRouter.js';
import userRouter from './routes/userRouter.js';
const PORT = process.env.PORT || 10101;

dotenv.config();
const app = new express();
connectDB();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', router);
app.use('/api/v1', userRouter);

app.listen(PORT, () => console.log(`Server Created On Port : ${PORT}`.bgBlack.blue));