import {useEffect, useState} from 'react';
import {IMovie} from '../../models/movie';
import MoviesShow from '../../services/moviesShow';

const useHomeModel = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function getPopular() {
    await MoviesShow.showPopularMovies().then(response => {
      setMovies(response.data.results);
    });
  }

  useEffect(() => {
    getPopular();
  }, []);

  return {
    movies,
  };
};

export default useHomeModel;
