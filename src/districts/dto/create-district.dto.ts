import {
  districtsCreateInput,
  wardsCreateNestedManyWithoutDistrictInput,
  propertiesCreateNestedManyWithoutDistrictInput,
  provincesCreateNestedOneWithoutDistrictsInput,
} from '@generated/prisma/models';

export class CreateDistrictDto implements districtsCreateInput {
  id?: string | undefined;
  code: number;
  name: string;
  codename: string;
  division_type: string;
  province: provincesCreateNestedOneWithoutDistrictsInput;
  wards?: wardsCreateNestedManyWithoutDistrictInput | undefined;
  properties?: propertiesCreateNestedManyWithoutDistrictInput | undefined;
}
