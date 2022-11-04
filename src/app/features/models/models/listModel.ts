import { Brand } from '../../brands/models/brand';

// Rename Model to ListModel
export interface ListModel {
  name: string;
  brandName: Brand;
  dailyPrice: number;
}
