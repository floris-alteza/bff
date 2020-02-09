import { Schema } from 'mongoose';

export const AccountSchema = new Schema({
  initials: {
    type: Schema.Types.String,
    required: true,
  },
  accountNumber: {
    type: Schema.Types.String,
    // not unique but good enough for us
    default: () => Math.floor(Math.random() * 10000000000),
  },
  lastname: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  street: {
    type: Schema.Types.String,
    required: true,
  },
  city: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
  balance: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: value => /^-?\d*(\.\d+)?$/.test(value),
      message: '{VALUE} is not a valid balance',
    },
  },
});

AccountSchema.methods.changeBalance = function(
  change: number,
  cb,
): Promise<Account> {
  console.log(change, this);
  const balanceFloat = parseFloat(this.balance);
  const newBalance = balanceFloat + change;
  // damn floats
  this.balance = newBalance.toFixed(2);
  return this.save(cb);
};
