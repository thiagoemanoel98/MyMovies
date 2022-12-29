import React from 'react';
import SearchInput from '../../components/SearchInput';

import * as S from './styles';

const HomeView: React.FC = () => {
  return (
    <S.Container>
      <S.GreetingsText>O que você deseja assistir?</S.GreetingsText>

      <SearchInput />
    </S.Container>
  );
};

export default HomeView;
