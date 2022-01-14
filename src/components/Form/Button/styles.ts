import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  padding: 18px;
  border-radius: 5px;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shapes};
`;