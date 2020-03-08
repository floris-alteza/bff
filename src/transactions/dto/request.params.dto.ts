import { IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccountIdDto {
  @IsString()
  @IsMongoId()
  @ApiProperty({ type: 'String' })
  readonly accountId: string;
}
