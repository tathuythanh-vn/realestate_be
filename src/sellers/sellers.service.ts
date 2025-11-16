import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { UUID } from 'crypto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}

  async create(createSellerDto: CreateSellerDto) {
    return this.prisma.sellers.create({ data: createSellerDto });
  }

  async findAll() {
    return this.prisma.sellers.findMany();
  }

  async findOne(id: UUID) {
    return this.prisma.sellers.findUnique({ where: { id } });
  }

  async update(id: UUID, updateSellerDto: UpdateSellerDto) {
    return this.prisma.sellers.update({
      where: { id },
      data: updateSellerDto,
    });
  }

  async remove(id: UUID) {
    return this.prisma.sellers.delete({ where: { id } });
  }
}
