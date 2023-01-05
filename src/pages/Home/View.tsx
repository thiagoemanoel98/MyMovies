import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SearchInput from '../../components/SearchInput';
import MovieCarousel from './MovieCarousel';

import * as S from './styles';

const HomeView: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState('action');

  return (
    <S.Container>
      <S.GreetingsText>O que você deseja assistir?</S.GreetingsText>
      <SearchInput />
      <S.ContentArea>
        <MovieCarousel />

        <ScrollView horizontal>
          <S.CategoryArea>
            <S.CategoryButton onPress={() => setCategorySelected('action')}>
              <S.CategoryText isClicked={categorySelected === 'action'}>
                Ação
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('adventure')}>
              <S.CategoryText isClicked={categorySelected === 'adventure'}>
                Aventura
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('comedy')}>
              <S.CategoryText isClicked={categorySelected === 'comedy'}>
                Comédia
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('drama')}>
              <S.CategoryText isClicked={categorySelected === 'drama'}>
                Drama
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('romance')}>
              <S.CategoryText isClicked={categorySelected === 'romance'}>
                Romance
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('thriller')}>
              <S.CategoryText isClicked={categorySelected === 'thriller'}>
                Suspense
              </S.CategoryText>
            </S.CategoryButton>

            <S.CategoryButton onPress={() => setCategorySelected('others')}>
              <S.CategoryText isClicked={categorySelected === 'others'}>
                Outros
              </S.CategoryText>
            </S.CategoryButton>
          </S.CategoryArea>
        </ScrollView>
      </S.ContentArea>
    </S.Container>
  );
};

export default HomeView;
