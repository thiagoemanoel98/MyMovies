import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10%;
  padding: 0 18px;
`;

export const ArrowLeftIcon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const PageTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const BookMarkIcon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const MoviePoster = styled.Image`
  margin-left: 22px;
  height: ${RFValue(220)}px;
  width: ${RFValue(140)}px;
  border-radius: ${RFValue(10)}px;
`;

export const BackdropMovie = styled.Image`
  height: ${RFValue(220)}px;
  width: 100%;
`;
