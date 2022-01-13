import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/theme';

export const Container = styled.TextInput`
  width: 100%;
  padding: 18px;

  font-family: ${({ theme }) => theme.Fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shapes};
  border-radius: 5px;

  margin-bottom: 8px;
`;
