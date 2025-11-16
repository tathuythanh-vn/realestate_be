import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { UUID } from 'crypto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.properties.create({ data: createPropertyDto });
  }

  async findAll() {
    return this.prisma.properties.findMany();
  }

  async findOne(id: UUID) {
    return this.prisma.properties.findUnique({ where: { id } });
  }

  async update(id: UUID, updatePropertyDto: UpdatePropertyDto) {
    return this.prisma.properties.update({
      where: { id },
      data: updatePropertyDto,
    });
  }

  async remove(id: UUID) {
    return this.prisma.properties.delete({ where: { id } });
  }
}
