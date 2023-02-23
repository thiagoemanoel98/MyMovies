import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';

import {IMovie} from '../../common/models/movie';
import * as S from './styles';

interface IRouteParams {
  movie: IMovie;
}
const MovieDetailsView: React.FC = () => {
  const route = useRoute();
  const {movie} = route.params as IRouteParams;

  console.log('chegou:', movie);

  return (
    <S.Container>
      <Text>Movie Details</Text>
    </S.Container>
  );
};

export default MovieDetailsView;
