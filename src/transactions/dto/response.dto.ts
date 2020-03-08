import { IsString, ValidateNested, IsObject, IsNumber } from 'class-validator';

class SimpleAccount {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly accountNumber: string;

  @IsString()
  readonly initials: string;

  @IsString()
  readonly lastname: string;
}

export class PopulatedTransactionDto {
  @IsString()
  readonly _id: string;

  @IsObject()
  @ValidateNested()
  readonly from: SimpleAccount;

  @IsObject()
  @ValidateNested()
  readonly to: SimpleAccount;

  @IsString()
  readonly amount: string;

  @IsString()
  readonly date: string;

  @IsNumber()
  readonly __v?: number;
}

export class TransactionDto {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly from: string;

  @IsString()
  readonly to: string;

  @IsString()
  readonly amount: string;

  @IsString()
  readonly date: string;

  @IsNumber()
  readonly __v?: number;
}
