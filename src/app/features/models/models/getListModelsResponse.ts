import { ListModel } from './listModel';
import { PaginatedList } from '../../../core/models/paginatedList';

export interface GetListModelsResponse extends PaginatedList<ListModel> {}
