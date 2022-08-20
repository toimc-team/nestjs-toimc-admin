import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsNotEmpty()
  published?: boolean = false;
}
