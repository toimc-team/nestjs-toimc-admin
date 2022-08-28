import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFocusDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ required: false, default: '' })
  @IsNotEmpty()
  link?: string;

  @ApiProperty({ required: false, default: '' })
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({ required: false, default: '' })
  focus_img?: string;

  @ApiPropertyOptional({ required: false, default: 0 })
  @IsNotEmpty()
  type?: number;

  @ApiPropertyOptional({ required: false, default: 0 })
  @IsNotEmpty()
  status?: number;

  @ApiPropertyOptional({ required: false, default: 0 })
  @IsNotEmpty()
  sort?: number;
}
