import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateRuleDto } from './dto';
import { RolesService } from './roles.service';

import { RbacInterceptor } from '@/interceptor';
import { JwtGuard } from '@/auth/guard';

@UseGuards(JwtGuard)
@Controller('role')
@ApiTags('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @UseInterceptors(new RbacInterceptor(3))
  @Post()
  create(@Body() dto: CreateRuleDto) {
    return this.roleService.create(dto);
  }
}
