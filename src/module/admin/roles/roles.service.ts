import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateRuleDto, UpdateRoleDto } from './dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}
  create(createRuleDto: CreateRuleDto) {
    // TODO key重复判断
    return this.prisma.role.create({ data: createRuleDto });
  }

  update(id: number, updateRuleDto: UpdateRoleDto) {
    // TODO key重复判断
    // TODO 新增预设字段，预设为True时不能修改，例如super_admin
    // TODO 修改角色信息，需要新增LOG记录，记录修改时间、修改人、修改内容
    return this.prisma.role.update({
      where: { id },
      data: updateRuleDto,
    });
  }

  findOne(id: number) {
    // TODO 为空判断
    return this.prisma.role.findUnique({ where: { id } });
  }

  remove(id: number) {
    // TODO 为空判断
    return this.prisma.role.delete({ where: { id } });
  }
}
