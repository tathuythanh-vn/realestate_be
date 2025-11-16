import { provincesModel } from '@generated/prisma/models';

export class Province implements provincesModel {
  id: string;
  name: string;
  code: number;
  codename: string;
  division_type: string;
}
