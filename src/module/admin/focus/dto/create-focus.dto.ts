import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFocusDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: false, default: '' })
  @IsNotEmpty()
  link?: string;

  @ApiProperty({ required: false, default: '' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false, default: '' })
  focus_img?: string;

  @ApiProperty({ required: false, default: 0 })
  @IsNotEmpty()
  type?: number;

  @ApiProperty({ required: false, default: 0 })
  @IsNotEmpty()
  status?: number;

  @ApiProperty({ required: false, default: 0 })
  @IsNotEmpty()
  sort?: number;
}
