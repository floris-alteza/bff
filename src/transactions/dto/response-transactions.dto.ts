import { IsString, ValidateNested, IsObject } from 'class-validator';

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

export class ResponseTransactionsDto {
  @IsString()
  readonly '_id': string;

  @IsObject()
  @ValidateNested()
  readonly 'from': SimpleAccount;

  @IsObject()
  @ValidateNested()
  readonly 'to': SimpleAccount;

  @IsString()
  readonly 'amount': string;

  @IsString()
  readonly 'date': string;

  @IsString()
  readonly '__v': string;
}
