import { IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class UpdateAccountDto {
  @IsOptional()
  @IsString()
  readonly initials?: string;

  @IsOptional()
  @IsString()
  readonly lastname?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly street?: string;

  @IsOptional()
  @IsString()
  readonly city?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;
}

export class CreateAccountDto {
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

  @IsNumber({ maxDecimalPlaces: 2 })
  readonly balance: number;
}
