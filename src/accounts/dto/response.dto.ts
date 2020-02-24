import { IsString, IsEmail, IsNumber } from 'class-validator';

export class AccountDto {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly accountNumber: string;

  @IsString()
  readonly initials: string;

  @IsString()
  readonly lastname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly street: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly balance: string;

  @IsNumber()
  readonly __v?: number;
}
