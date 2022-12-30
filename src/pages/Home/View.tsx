import React from 'react';
import SearchInput from '../../components/SearchInput';
import MovieCarousel from './MovieCarousel';

import * as S from './styles';

const HomeView: React.FC = () => {
  return (
    <S.Container>
      <S.GreetingsText>O que você deseja assistir?</S.GreetingsText>

      <SearchInput />

      <S.ContentArea>
        <MovieCarousel />
      </S.ContentArea>
    </S.Container>
  );
};

export default HomeView;
