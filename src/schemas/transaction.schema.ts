import { Schema } from 'mongoose';
import { Transaction } from '../interfaces/transaction.interface';

export const TransactionSchema = new Schema<Transaction>({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: value => /^-?\d*(\.\d+)?$/.test(value),
      message: '{VALUE} is not a valid amount',
    },
  },
});
