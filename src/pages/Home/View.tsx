import React from 'react';
import {ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MoviePoster from '../../components/MoviePoster';
import SearchInput from '../../components/SearchInput';
import MovieCarousel from './MovieCarousel';

import * as S from './styles';
import useHomeViewModel from './view.model';

const HomeView: React.FC = () => {
  const {categorySelected, setCategorySelected, movies} = useHomeViewModel();

  return (
    <S.Container>
      <S.GreetingsText>O que você deseja assistir?</S.GreetingsText>
      <SearchInput />
      <S.ContentArea>
        <MovieCarousel />

        <S.ScrollCategoryArea>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.CategoryArea>
              <S.CategoryButton onPress={() => setCategorySelected('action')}>
                <S.CategoryText isClicked={categorySelected === 'action'}>
                  Ação
                </S.CategoryText>
              </S.CategoryButton>

              <S.CategoryButton
                onPress={() => setCategorySelected('adventure')}>
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
        </S.ScrollCategoryArea>

        <MoviePoster
          height={RFValue(180)}
          width={RFValue(110)}
          url={
            'https://cineclick-static.flixmedia.cloud/480/processed/56e46bd3-ac16-48d5-b909-59c34b8e9ba9.webp'
          }
        />
      </S.ContentArea>
    </S.Container>
  );
};

export default HomeView;
