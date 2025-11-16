import { wardsModel } from '@generated/prisma/models';

export class Ward implements wardsModel {
  id: string;
  code: number;
  name: string;
  codename: string;
  division_type: string;
  district_id: string;
}
