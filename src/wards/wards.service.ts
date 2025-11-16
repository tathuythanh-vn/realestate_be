import { Injectable } from '@nestjs/common';
import { CreateWardDto } from './dto/create-ward.dto';
import { UpdateWardDto } from './dto/update-ward.dto';
import { UUID } from 'crypto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class WardsService {
  constructor(private prisma: PrismaService) {}

  async create(createWardDto: CreateWardDto) {
    return this.prisma.wards.create({ data: createWardDto });
  }

  async findAll() {
    return this.prisma.wards.findMany();
  }

  async findOne(id: UUID) {
    return this.prisma.wards.findUnique({ where: { id } });
  }

  async update(id: UUID, updateWardDto: UpdateWardDto) {
    return this.prisma.wards.update({
      where: { id },
      data: updateWardDto,
    });
  }

  async remove(id: UUID) {
    return this.prisma.wards.delete({ where: { id } });
  }
}
