import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFocusDto } from './dto/create-focus.dto';
import { UpdateFocusDto } from './dto/update-focus.dto';

@Injectable()
export class FocusService {
  constructor(private prisma: PrismaService) {}

  create(createFocusDto: CreateFocusDto) {
    return this.prisma.focus.create({ data: createFocusDto });
  }

  findAll() {
    return this.prisma.focus.findMany();
  }

  findOne(id: number) {
    return this.prisma.focus.findUnique({ where: { id } });
  }

  update(id: number, updateFocusDto: UpdateFocusDto) {
    return this.prisma.focus.update({
      where: { id },
      data: updateFocusDto,
    });
  }

  remove(id: number) {
    return this.prisma.focus.delete({ where: { id } });
  }
}
