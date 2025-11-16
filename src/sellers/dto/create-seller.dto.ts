import {
  sellersCreateInput,
  propertiesCreateNestedManyWithoutSellerInput,
} from '@generated/prisma/models';

export class CreateSellerDto implements sellersCreateInput {
  id?: string | undefined;
  name: string;
  phone: string;
  avatar: string;
  email: string;
  agency: string;
  created_at?: Date | string | undefined;
  properties?: propertiesCreateNestedManyWithoutSellerInput | undefined;
}
