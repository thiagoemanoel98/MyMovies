import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';

const SearchInput: React.FC = () => {
  return (
    <S.SearchArea>
      <S.SearchInput />
      <TouchableOpacity>
        <S.SearchIcon name="search-outline" />
      </TouchableOpacity>
    </S.SearchArea>
  );
};

export default SearchInput;
