import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [SellersController],
  providers: [SellersService, PrismaService],
})
export class SellersModule {}
