import { Document } from 'mongoose';

export interface SimpleAccount {
  readonly _id: string;
  readonly accountNumber: string;
  readonly initials: string;
  readonly lastname: string;
}

export interface Transaction extends Document {
  readonly from: string;
  readonly to: string;
  readonly date: string;
  readonly amount: string;
}

export interface ReadableTransaction extends Document {
  readonly from: SimpleAccount;
  readonly to: SimpleAccount;
  readonly date: string;
  readonly amount: string;
}
