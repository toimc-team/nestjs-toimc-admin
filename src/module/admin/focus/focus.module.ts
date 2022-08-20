import { Module } from '@nestjs/common';
import { FocusService } from './focus.service';
import { FocusController } from './focus.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FocusController],
  providers: [FocusService],
  imports: [PrismaModule],
})
export class FocusModule {}
