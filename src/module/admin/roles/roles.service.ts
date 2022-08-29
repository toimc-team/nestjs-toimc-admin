import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateRuleDto } from './dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}
  create(createFocusDto: CreateRuleDto) {
    return this.prisma.role.create({ data: createFocusDto });
  }
}
