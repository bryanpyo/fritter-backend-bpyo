import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';
import type {PopulatedFreet} from '../freet/model';

export type Like = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  like_giver: Types.ObjectId;
  like_receiver: Types.ObjectId;
};

export type PopulatedFreetLike = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  like_giver: User;
  like_receiver: PopulatedFreet;
};

const LikeSchema = new Schema<Like>({
  like_giver: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  like_receiver: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'docModel'
  },
});

const LikeModel = model<Like>('Like', LikeSchema);
export default LikeModel;
