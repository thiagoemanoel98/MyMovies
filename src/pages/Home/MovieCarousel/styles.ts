import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const MoviePoster = styled.Image`
  margin-left: 22px;
  height: ${RFValue(220)}px;
  width: ${RFValue(140)}px;
  border-radius: ${RFValue(10)}px;
`;
