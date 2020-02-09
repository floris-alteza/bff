import { Document } from 'mongoose';

export interface Transaction extends Document {
  readonly from: string;
  readonly to: string;
  readonly date: string;
  readonly amount: string;
}
