import { PartialType } from '@nestjs/swagger';
import { CreateFocusDto } from './create-focus.dto';

export class UpdateFocusDto extends PartialType(CreateFocusDto) {}
