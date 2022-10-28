import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import FameCollection from './collection';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import * as util from './util';
import * as fameValidator from '../fame/middleware';

import UserCollection from '../user/collection';

const router = express.Router();

// /**
//  * Get all the freets
//  *
//  * @name GET /api/freets
//  *
//  * @return {FreetResponse[]} - A list of all the freets sorted in descending
//  *                      order by date modified
//  */
// /**
//  * Get freets by author.
//  *
//  * @name GET /api/freets?authorId=id
//  *
//  * @return {FreetResponse[]} - An array of freets created by user with id, authorId
//  * @throws {400} - If authorId is not given
//  * @throws {404} - If no user has given authorId
//  *
//  */
// router.get(
//   '/',
//   async (req: Request, res: Response, next: NextFunction) => {
//     // Check if authorId query parameter was supplied
//     if (req.query.author !== undefined) {
//       next();
//       return;
//     }

//     const allFreets = await FreetCollection.findAll();
//     const response = allFreets.map(util.constructFreetResponse);
//     res.status(200).json(response);
//   },
//   [
//     userValidator.isAuthorExists
//   ],
//   async (req: Request, res: Response) => {
//     const authorFreets = await FreetCollection.findAllByUsername(req.query.author as string);
//     const response = authorFreets.map(util.constructFreetResponse);
//     res.status(200).json(response);
//   }
// );

/**
 * Modify a freet
 *
 * @name PUT /api/freets/:id
 *
 * @param {string} content - the new content for the freet
 * @return {FreetResponse} - the updated freet
 * @throws {403} - if the user is not logged in or not the author of
 *                 of the freet
 * @throws {404} - If the freetId is not valid
 * @throws {400} - If the freet content is empty or a stream of empty spaces
 * @throws {413} - If the freet content is more than 140 characters long
 */
router.put(
  '/:userId',
  [fameValidator.isFameExists],
  async (req: Request, res: Response) => {
    const user = await UserCollection.findOneByUserId(req.params.userId as string); 
    await FameCollection.updateOne(req.params.userId, req.body.newFame as unknown as number);
    res.status(200).json({
      message: `The fame for ${user.username} was updated successfully to ${req.body.newFame}.`,
    });
  }
);

router.post(
  '/:userId',
  [fameValidator.isFameExistsAlready],
  async (req: Request, res: Response) => {
    await FameCollection.addOne(req.params.userId);
    res.status(201).json({
      message: `Your fame was created successfully.`
    });
  }
);

/**
 * Get the fame of user
 *
 * @name GET /api/fame/:userId
 *
 * @return {number} - fame of the user
 * @throws {400} - If authorId is not given
 * @throws {404} - If no user has given authorId
 *
 */
router.get(
  '/:userId',
  [
    fameValidator.isFameExists,
    fameValidator.isUserExists
  ],
  async (req: Request, res: Response) => {
    const user = await UserCollection.findOneByUserId(req.params.userId as string); 
    const response = await FameCollection.findOne(req.params.userId);
    res.status(200).json({
      message: `The fame for ${user.username} is ${response.fame_num}.`,
    });
  }
);

export {router as fameRouter};
