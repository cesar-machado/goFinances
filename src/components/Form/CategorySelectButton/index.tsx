import React from 'react';
import { View, Text } from 'react-native';
import { Category, Container, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  );
}
