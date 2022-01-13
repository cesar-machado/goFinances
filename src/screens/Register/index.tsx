import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import TransactionTypeButton from '../../components/TransactionTypeButton';
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionsTypes>
            <TransactionTypeButton
              type='up'
              title='Entrada'
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='Saída'
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>
        <Button title='Enviar' />
      </Form>
    </Container>
  );
}
