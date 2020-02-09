import { IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdDto {
  @IsString()
  @IsMongoId()
  @ApiProperty({ type: 'String' })
  readonly id: string;
}
