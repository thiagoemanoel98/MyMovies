import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.ferry};
  border-radius: ${RFValue(16)}px;
  width: 90%;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  color: ${({theme}) => theme.colors.white};
`;

export const SearchIcon = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.commet};
`;
