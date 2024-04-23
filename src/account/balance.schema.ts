import * as mongoose from 'mongoose';

export const BalanceSchema = new mongoose.Schema({
       userId: String,
       currency: String,
       amount: Number,
       account: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
});