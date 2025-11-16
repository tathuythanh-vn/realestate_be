import { propertiesModel } from '@generated/prisma/models';

export class Property implements propertiesModel {
  id: string;
  title: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  description: string;
  type: string;
  images: string[];
  featured: boolean;
  created_at: Date;
  is_published: boolean;
  is_hidden: boolean;
  expire_at: Date;
  bumped_at: Date;
  last_bumped_at: Date;
  seller_id: string;
  province_id: string;
  district_id: string;
  ward_id: string;
  is_vip: boolean;
  vip_activated_at: Date | null;
  vip_expire_at: Date | null;
}
