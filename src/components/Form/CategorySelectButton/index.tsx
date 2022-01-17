import React from 'react';
import { View, Text } from 'react-native';
import { Category, Container, Content, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container>
      <Content onPress={onPress}>
        <Category>{title}</Category>
        <Icon name='chevron-down' />
      </Content>
    </Container>
  );
}
