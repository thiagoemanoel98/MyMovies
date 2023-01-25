import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  width: number;
  height: number;
};

export const Poster = styled.Image<Props>`
  height: ${({height}) => height}px;
  width: ${({width}) => width}px;
  border-radius: ${RFValue(10)}px;
`;
