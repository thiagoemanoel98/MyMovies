import {FlatList, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import React from 'react';
import * as S from './styles';
import {IMovie} from '../../../common/models/movie';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../common/models/screenNavigationProp';

interface IMovieProps {
  movies: IMovie[];
}

export default function MovieCarousel({movies}: IMovieProps) {
  const {navigate} = useNavigation<ScreenNavigationProp>();

  function handleClick(movie: IMovie) {
    navigate('MovieDetails', {movie: movie});
  }

  const renderItem = ({item}: ListRenderItemInfo<IMovie>) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <S.MoviePoster
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <S.Container>
      <FlatList<IMovie>
        data={movies}
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </S.Container>
  );
}
