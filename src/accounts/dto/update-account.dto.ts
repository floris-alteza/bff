import { IsString, IsEmail } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  readonly initials?: string;

  @IsString()
  readonly lastname?: string;

  @IsEmail()
  readonly email?: string;

  @IsString()
  readonly street?: string;

  @IsString()
  readonly city?: string;

  @IsString()
  readonly phone?: string;
}
