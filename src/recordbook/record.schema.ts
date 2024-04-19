import { Schema } from 'mongoose';

export interface Balance {
    currency: string;
    amount: number;
}

export const BalanceSchema = new Schema<Balance>({
    currency: String,
    amount: Number
});

export interface Record {
    userId: string;
    name: string;
    govtDocument: {type: String, unique: true};
    balances: Balance[];
}

export const RecordSchema = new Schema<Record>({
    userId: String,
    name: String,
    govtDocument: String,
    balances: [BalanceSchema]
});
