import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { UUID } from 'crypto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class ProvincesService {
  constructor(private prisma: PrismaService) {}

  async create(createProvinceDto: CreateProvinceDto) {
    return this.prisma.provinces.create({ data: createProvinceDto });
  }

  async findAll() {
    return this.prisma.provinces.findMany();
  }

  async findOne(id: UUID) {
    return this.prisma.provinces.findUnique({ where: { id } });
  }

  async update(id: UUID, updateProvinceDto: UpdateProvinceDto) {
    return this.prisma.provinces.update({
      where: { id },
      data: updateProvinceDto,
    });
  }

  async remove(id: UUID) {
    return this.prisma.provinces.delete({ where: { id } });
  }
}
