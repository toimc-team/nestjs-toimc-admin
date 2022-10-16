import { PartialType } from '@nestjs/swagger';
import { CreateRuleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRuleDto) {}
