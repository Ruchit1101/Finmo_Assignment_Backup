import { Schema } from 'mongoose';

export interface Balance {
    currency: string;
    amount: number;
}

export const BalanceSchema = new Schema<Balance>({
    currency: String,
    amount: Number
});
