import {useState} from 'react';

const useHomeViewModel = () => {
  const [categorySelected, setCategorySelected] = useState('action');

  return {
    categorySelected,
    setCategorySelected,
  };
};

export default useHomeViewModel;
