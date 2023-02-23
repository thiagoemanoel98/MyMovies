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

export const MoviePoster = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-left: 22px;
  margin-top: -${RFValue(60)}px;
  height: ${RFValue(120)}px;
  width: ${RFValue(90)}px;
  border-radius: ${RFValue(10)}px;
`;

export const TopArea = styled.View`
  width: 100%;
`;

export const BackdropMovie = styled.Image`
  height: ${RFValue(220)}px;
  width: 100%;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const RatingArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.opacity};

  padding: 0px 8px;
  border-radius: 8px;

  position: absolute;
  right: 4%;
  bottom: 4%;
`;

export const RatingValue = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.orange};
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const StarIcon = styled(FontAwesome)`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.orange};
  margin-right: 4px;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const MovieName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.semiBold};

  width: 60%;
  margin-left: 12px;
`;
