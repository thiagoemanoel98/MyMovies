import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const GreetingsText = styled.Text`
  width: 90%;
  margin-top: 12px;
  margin-bottom: 20px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.white};
  text-align: left;
`;

export const ContentArea = styled.View`
  margin-top: 22px;
`;
