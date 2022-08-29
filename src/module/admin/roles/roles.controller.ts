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
import { CreateRuleDto, UpdateRoleDto } from './dto';
import { RolesService } from './roles.service';

import { RbacInterceptor } from '@/interceptor';
import { JwtGuard } from '@/auth/guard';

@UseGuards(JwtGuard)
@Controller('role')
@ApiTags('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @UseInterceptors(new RbacInterceptor(['super_admin']))
  @Post()
  create(@Body() dto: CreateRuleDto) {
    return this.roleService.create(dto);
  }

  @UseInterceptors(new RbacInterceptor(['super_admin']))
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.roleService.findOne(id);
  }

  @UseInterceptors(new RbacInterceptor(['super_admin']))
  @Patch(':id')
  edit(@Param() id: number, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(id, dto);
  }

  @UseInterceptors(new RbacInterceptor(['super_admin']))
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roleService.remove(id);
  }
}
