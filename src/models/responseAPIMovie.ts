import {IMovie} from './movie';

export interface IResponseAPIMovie {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
