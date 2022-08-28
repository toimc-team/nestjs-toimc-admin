import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsNotEmpty()
  published?: boolean = false;
}
