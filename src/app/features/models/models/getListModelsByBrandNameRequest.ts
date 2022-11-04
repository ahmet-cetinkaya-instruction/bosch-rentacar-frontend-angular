import { PageRequest } from '../../../core/models/pageRequest';

export interface GetListModelsByBrandNameRequest extends PageRequest {
  brandName: string;
}
