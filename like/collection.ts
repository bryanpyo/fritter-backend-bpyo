import type {HydratedDocument, Types} from 'mongoose';
import type {Like} from './model';
import LikeModel from './model';
import UserCollection from '../user/collection';

class LikeCollection {
  /**
   * Add a freet to the collection
   *
   * @param {string} authorId - The id of the author of the freet
   * @param {string} content - The id of the content of the freet
   * @return {Promise<HydratedDocument<Freet>>} - The newly created freet
   */
  static async addOne(like_giver: Types.ObjectId | string, like_receiver: Types.ObjectId | string): Promise<boolean> {
    const like = new LikeModel({
      like_giver,
      like_receiver
    });
    await like.save(); // Saves freet to MongoDB
    return like !== null;
  }
}

export default LikeCollection;
