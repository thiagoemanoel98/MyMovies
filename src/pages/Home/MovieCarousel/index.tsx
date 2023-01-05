import {FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import * as S from './styles';

export default function MovieCarousel() {
  const DataTest = [{}, {}, {}, {}];

  return (
    <S.Container>
      <FlatList
        data={DataTest}
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <S.MoviePoster
              source={{
                uri: 'https://i0.wp.com/alternativanerd.com.br/wp-content/uploads/2022/01/AN_Homem-Aranha-Sem-Volta-Para-Casa-Cartaz.jpeg?resize=691%2C1024&ssl=1',
              }}
            />
          </TouchableOpacity>
        )}
      />
    </S.Container>
  );
}
