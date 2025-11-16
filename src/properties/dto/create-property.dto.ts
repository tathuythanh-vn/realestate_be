import {
  propertiesCreateInput,
  sellersCreateNestedOneWithoutPropertiesInput,
  provincesCreateNestedOneWithoutPropertiesInput,
  districtsCreateNestedOneWithoutPropertiesInput,
  wardsCreateNestedOneWithoutPropertiesInput,
} from '@generated/prisma/models';

export class CreatePropertyDto implements propertiesCreateInput {
  id?: string | undefined;
  title: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  description: string;
  type: string;
  images?: string[] | undefined;
  featured?: boolean | undefined;
  created_at?: Date | string | undefined;
  is_published?: boolean | undefined;
  is_hidden?: boolean | undefined;
  expire_at?: Date | string | undefined;
  bumped_at?: Date | string | undefined;
  last_bumped_at: Date | string;
  seller: sellersCreateNestedOneWithoutPropertiesInput;
  province: provincesCreateNestedOneWithoutPropertiesInput;
  district: districtsCreateNestedOneWithoutPropertiesInput;
  ward: wardsCreateNestedOneWithoutPropertiesInput;
  is_vip?: boolean | undefined;
  vip_activated_at?: Date | string | null | undefined;
  vip_expire_at?: Date | string | null | undefined;
}
