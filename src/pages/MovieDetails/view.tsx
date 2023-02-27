import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {IMovie} from '../../common/models/movie';
import * as S from './styles';
import {ScreenNavigationProp} from '../../common/models/screenNavigationProp';
import genres from '../../utils/genres';
import {ScrollView} from 'react-native';

interface IRouteParams {
  movie: IMovie;
}
const MovieDetailsView: React.FC = () => {
  const route = useRoute();
  const {movie} = route.params as IRouteParams;
  const {goBack} = useNavigation<ScreenNavigationProp>();

  const releaseYear = movie.release_date.split('-')[0];

  const getGenreById = (id: number) => {
    let index = genres.findIndex(genre => genre.id === id);
    return genres[index].name;
  };

  return (
    <S.Scroll>
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
          <S.MovieName>{movie.title}</S.MovieName>
        </S.TitleArea>

        <S.InfoArea>
          <S.InfoIcon name="calendar-o" />
          <S.InfoText> {releaseYear} | </S.InfoText>
          <S.InfoIcon name="ticket" />
          <S.InfoText>{getGenreById(movie.genre_ids[0])}</S.InfoText>
        </S.InfoArea>

        <S.DescriptionArea>
          <S.Description>{movie.overview}</S.Description>
        </S.DescriptionArea>
      </S.Container>
    </S.Scroll>
  );
};

export default MovieDetailsView;
