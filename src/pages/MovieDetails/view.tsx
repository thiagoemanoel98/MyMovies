import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {IMovie} from '../../common/models/movie';
import * as S from './styles';
import {ScreenNavigationProp} from '../../common/models/screenNavigationProp';

interface IRouteParams {
  movie: IMovie;
}
const MovieDetailsView: React.FC = () => {
  const route = useRoute();
  const {movie} = route.params as IRouteParams;
  const {goBack} = useNavigation<ScreenNavigationProp>();

  return (
    <S.Container>
      <S.Header>
        <S.ArrowLeftIcon name="chevron-left" onPress={goBack} />
        <S.PageTitle>Detalhes</S.PageTitle>
        <S.BookMarkIcon name="bookmark-o" />
      </S.Header>

      <S.TopArea>
        <S.BackdropMovie
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
          }}
        />
        <S.RatingArea>
          <S.StarIcon name="star-o" />
          <S.RatingValue>{movie.vote_average}</S.RatingValue>
        </S.RatingArea>
      </S.TopArea>
      <S.TitleArea>
        <S.MoviePoster
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
        <S.MovieName>
          {movie.title}
        </S.MovieName>
      </S.TitleArea>
    </S.Container>
  );
};

export default MovieDetailsView;
