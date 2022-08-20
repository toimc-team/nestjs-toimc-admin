import { Test, TestingModule } from '@nestjs/testing';
import { FocusController } from './focus.controller';
import { FocusService } from './focus.service';

describe('FocusController', () => {
  let controller: FocusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FocusController],
      providers: [FocusService],
    }).compile();

    controller = module.get<FocusController>(FocusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
