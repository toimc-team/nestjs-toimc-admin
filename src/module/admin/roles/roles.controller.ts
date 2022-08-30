import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRuleDto, UpdateRoleDto } from './dto';
import { RolesService } from './roles.service';

import { RbacInterceptor } from '@/interceptor';
import { JwtGuard } from '@/auth/guard';

@UseGuards(JwtGuard)
@UseInterceptors(new RbacInterceptor(['super_admin']))
@Controller('role')
@ApiTags('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRuleDto) {
    return this.roleService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  edit(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
