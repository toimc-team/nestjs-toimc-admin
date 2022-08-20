import { ApiProperty } from '@nestjs/swagger';
import { Focus } from '@prisma/client';

export class FocusEntity implements Focus {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  type: number;

  @ApiProperty({ required: false, default: 0 })
  status: number;

  @ApiProperty({ required: false, default: 0 })
  sort: number;

  @ApiProperty()
  focus_img: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
