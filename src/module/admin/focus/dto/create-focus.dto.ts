import { ApiProperty } from '@nestjs/swagger';

export class CreateFocusDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, default: '' })
  link?: string;

  @ApiProperty({ required: false, default: '' })
  content: string;

  @ApiProperty({ required: false, default: '' })
  focus_img?: string;

  @ApiProperty({ required: false, default: 0 })
  type?: number;

  @ApiProperty({ required: false, default: 0 })
  status?: number;

  @ApiProperty({ required: false, default: 0 })
  sort?: number;
}
