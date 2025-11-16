import { Module } from '@nestjs/common';
import { WardsService } from './wards.service';
import { WardsController } from './wards.controller';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [WardsController],
  providers: [WardsService, PrismaService],
})
export class WardsModule {}
