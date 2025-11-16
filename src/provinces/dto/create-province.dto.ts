import {
  districtsCreateNestedManyWithoutProvinceInput,
  propertiesCreateNestedManyWithoutProvinceInput,
  provincesCreateInput,
} from '@generated/prisma/models';

export class CreateProvinceDto implements provincesCreateInput {
  id?: string | undefined;
  code: number;
  name: string;
  codename: string;
  division_type: string;
  districts?: districtsCreateNestedManyWithoutProvinceInput | undefined;
  properties?: propertiesCreateNestedManyWithoutProvinceInput | undefined;
}
