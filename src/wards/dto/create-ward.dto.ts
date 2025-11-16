import {
  wardsCreateInput,
  propertiesCreateNestedManyWithoutWardInput,
  districtsCreateNestedOneWithoutWardsInput,
} from '@generated/prisma/models';

export class CreateWardDto implements wardsCreateInput {
  id?: string | undefined;
  code: number;
  name: string;
  codename: string;
  division_type: string;
  district: districtsCreateNestedOneWithoutWardsInput;
  properties?: propertiesCreateNestedManyWithoutWardInput | undefined;
}
