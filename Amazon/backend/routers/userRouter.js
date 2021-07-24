import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import data from '../data.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({}); //Wipe out all the users before generating them again
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  }),
);

export default userRouter;
