import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { UUID } from 'crypto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class DistrictsService {
  constructor(private prisma: PrismaService) {}

  async create(createDistrictDto: CreateDistrictDto) {
    return this.prisma.districts.create({ data: createDistrictDto });
  }

  async findAll() {
    return this.prisma.districts.findMany();
  }

  async findOne(id: UUID) {
    return this.prisma.districts.findUnique({ where: { id } });
  }

  async update(id: UUID, updateDistrictDto: UpdateDistrictDto) {
    return this.prisma.districts.update({
      where: { id },
      data: updateDistrictDto,
    });
  }

  async remove(id: UUID) {
    return this.prisma.districts.delete({ where: { id } });
  }
}
