import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './create-property.dto';
import { propertiesUpdateInput } from '@generated/prisma/models';

export class UpdatePropertyDto
  extends PartialType(CreatePropertyDto)
  implements propertiesUpdateInput {}
