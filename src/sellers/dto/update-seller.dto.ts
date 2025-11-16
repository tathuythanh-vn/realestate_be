import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './create-seller.dto';
import { sellersUpdateInput } from '@generated/prisma/models';

export class UpdateSellerDto
  extends PartialType(CreateSellerDto)
  implements sellersUpdateInput {}
