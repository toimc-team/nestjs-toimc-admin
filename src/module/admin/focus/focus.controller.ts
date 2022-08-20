import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Response,
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
  async create(
    @Body() createFocusDto: CreateFocusDto,
    @UploadedFile() file,
    @Response() res,
  ) {
    const saveDir = uploadFile(file);
    await this.focusService.create(
      Object.assign(createFocusDto, { focus_img: saveDir }),
    );
    return res;
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
  async update(
    @Param('id') id: string,
    @Body() updateFocusDto: UpdateFocusDto,
    @UploadedFile() file,
    @Response() res,
  ) {
    const saveDir = uploadFile(file);
    await this.focusService.update(
      +id,
      Object.assign(updateFocusDto, { focus_img: saveDir }),
    );
    return res;
  }

  @Delete(':id')
  @ApiOkResponse({ type: FocusEntity })
  remove(@Param('id') id: string) {
    return this.focusService.remove(+id);
  }
}
