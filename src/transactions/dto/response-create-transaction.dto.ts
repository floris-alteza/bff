import { IsString } from 'class-validator';

export class ResponseCreateTransactionDto {
  @IsString()
  readonly '_id': string;

  @IsString()
  readonly 'from': string;

  @IsString()
  readonly 'to': string;

  @IsString()
  readonly 'amount': string;

  @IsString()
  readonly 'date': string;

  @IsString()
  readonly '__v': string;
}
