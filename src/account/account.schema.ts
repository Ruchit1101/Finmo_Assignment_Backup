import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
       userId: String,
       name: String,
       goveDoc: String,
       balances: [{type:mongoose.Schema.Types.ObjectId, ref: 'Balance'}],
});