import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinceDto } from './create-province.dto';
import { provincesUpdateInput } from '@generated/prisma/models';

export class UpdateProvinceDto
  extends PartialType(CreateProvinceDto)
  implements provincesUpdateInput {}
