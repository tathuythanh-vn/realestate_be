import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [ProvincesController],
  providers: [ProvincesService, PrismaService],
})
export class ProvincesModule {}
