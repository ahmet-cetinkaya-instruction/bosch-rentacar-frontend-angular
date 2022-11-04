import { Brand } from './brand';
import { PaginatedList } from 'src/app/core/models/paginatedList';

export interface GetListBrandsResponse extends PaginatedList<Brand> {}
