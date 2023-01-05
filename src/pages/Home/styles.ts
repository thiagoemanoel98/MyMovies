import styled, {css} from 'styled-components/native';
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

export const CategoryArea = styled.View`
  flex-direction: row;
  margin-left: 22px;
`;

export const CategoryButton = styled.Pressable`
  margin-right: 18px;
`;

export const CategoryText = styled.Text<{isClicked: boolean}>`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};

  ${props =>
    props.isClicked &&
    css`
      padding-bottom: 12px;
      border-bottom-width: 4px;
      border-bottom-color: ${({theme}) => theme.colors.ferry};
    `}
`;
