import { PartialType } from '@nestjs/mapped-types';
import { CreateDistrictDto } from './create-district.dto';
import { districtsUpdateInput } from '@generated/prisma/models';

export class UpdateDistrictDto
  extends PartialType(CreateDistrictDto)
  implements districtsUpdateInput {}
