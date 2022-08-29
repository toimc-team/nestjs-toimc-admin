import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateRuleDto, UpdateRoleDto } from './dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}
  create(createRuleDto: CreateRuleDto) {
    return this.prisma.role.create({ data: createRuleDto });
  }

  update(id: number, updateRuleDto: UpdateRoleDto) {
    return this.prisma.role.update({
      where: { id },
      data: updateRuleDto,
    });
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.role.delete({ where: { id } });
  }
}
