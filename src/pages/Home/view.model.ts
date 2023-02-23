import {useEffect, useState} from 'react';
import useHomeModel from './models';

const useHomeViewModel = () => {
  const {movies} = useHomeModel();

  const [categorySelected, setCategorySelected] = useState('action');

  useEffect(() => {}, []);

  return {
    categorySelected,
    movies,
    setCategorySelected,
  };
};

export default useHomeViewModel;
