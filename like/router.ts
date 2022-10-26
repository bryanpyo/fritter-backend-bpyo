import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import LikeCollection from './collection';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import * as util from './util';

const router = express.Router();

router.put(
  '/:freetId?',
  [
    userValidator.isUserLoggedIn,
    freetValidator.isFreetExists,
  ],
  async (req: Request, res: Response) => {
    const like_giver = (req.session.userId as string) ?? '';
    const {freetId} = req.params;
    await LikeCollection.addOne(like_giver, freetId)
    res.status(200).json({
      message: 'Your freet was updated successfully.',
    });
  }
);

export {router as likeRouter};
