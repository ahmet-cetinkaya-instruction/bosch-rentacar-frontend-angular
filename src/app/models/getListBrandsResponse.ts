import { Brand } from './brand';
import { PaginatedList } from '../core/models/paginatedList';

export interface GetListBrandsResponse extends PaginatedList<Brand> {}
