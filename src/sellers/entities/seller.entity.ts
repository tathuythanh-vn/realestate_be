import { sellersModel } from '@generated/prisma/models';

export class Seller implements sellersModel {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  email: string;
  agency: string;
  created_at: Date;
}
