import {AxiosPromise} from 'axios';
import {IResponseAPIMovie} from '../models/responseAPIMovie';
import api from './api';

class MoviesShow {
  static showPopularMovies(): AxiosPromise<IResponseAPIMovie> {
    return api.get('/movie/popular/');
  }
}

export default MoviesShow;
