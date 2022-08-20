import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { uploadFile } from '../../../libs/utils';
import { FocusEntity } from '../focus/entities/focus.entity';
import { CreateFocusDto } from './dto/create-focus.dto';
import { UpdateFocusDto } from './dto/update-focus.dto';
import { FocusService } from './focus.service';

@Controller('focus')
@ApiTags('focus')
export class FocusController {
  constructor(private readonly focusService: FocusService) {}

  @Post()
  @ApiCreatedResponse({ type: FocusEntity })
  @UseInterceptors(FileInterceptor('focus_img'))
  create(@Body() dto: CreateFocusDto, @UploadedFile() file) {
    console.log(dto);
    const saveDir = uploadFile(file);

    return this.focusService.create(Object.assign(dto, { focus_img: saveDir }));
  }

  @Get()
  @ApiOkResponse({ type: FocusEntity })
  findAll() {
    return this.focusService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FocusEntity })
  findOne(@Param('id') id: string) {
    return this.focusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FocusEntity })
  @UseInterceptors(FileInterceptor('focus_img'))
  update(
    @Param('id') id: string,
    @Body() updateFocusDto: UpdateFocusDto,
    @UploadedFile() file,
  ) {
    const saveDir = uploadFile(file);

    return this.focusService.update(
      +id,
      Object.assign(updateFocusDto, { focus_img: saveDir }),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: FocusEntity })
  remove(@Param('id') id: string) {
    return this.focusService.remove(+id);
  }
}
