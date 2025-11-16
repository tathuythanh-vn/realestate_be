import { districtsModel } from '@generated/prisma/models';

export class District implements districtsModel {
  id: string;
  code: number;
  name: string;
  codename: string;
  division_type: string;
  province_id: string;
}
