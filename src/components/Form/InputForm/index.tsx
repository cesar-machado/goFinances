import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View, Text, TextInputProps } from 'react-native';
import Input from '../Input';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export default function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
        control={control}
      />
      {error && <Error> {error}</Error>}
    </Container>
  );
}
