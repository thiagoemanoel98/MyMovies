import React from 'react';
import * as S from './styles';

interface IProps {
  width: number;
  height: number;
  url: string;
}

export default function MoviePoster(props: IProps) {

  return (
    <S.Poster
      height={props.height}
      width={props.width}
      source={{uri: props.url}}
    />
  );
}
