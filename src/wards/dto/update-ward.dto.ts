import { PartialType } from '@nestjs/mapped-types';
import { CreateWardDto } from './create-ward.dto';
import { wardsUpdateInput } from '@generated/prisma/models';

export class UpdateWardDto
  extends PartialType(CreateWardDto)
  implements wardsUpdateInput {}
