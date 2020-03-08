import { IsNumber, IsNumberString } from 'class-validator';

export class CreateTransactionDto {
  @IsNumberString()
  readonly to: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  readonly amount: number;
}
