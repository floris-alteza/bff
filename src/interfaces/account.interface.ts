import { Document } from 'mongoose';

export interface Account extends Document {
  readonly accountNumber: string;
  readonly initials: string;
  readonly lastname: string;
  readonly email: string;
  readonly street: string;
  readonly city: string;
  readonly phone: string;
  readonly balance: string;

  changeBalance: (amount: number) => void;
}
