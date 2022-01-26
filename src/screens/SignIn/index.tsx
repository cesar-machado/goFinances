import { Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SignInTitle,
  Title,
  TitleWrapper,
} from './styles';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignInButton } from '../../components/SignInButton';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      Alert.alert('Não foi possível conectar a conta Google');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      Alert.alert('Não foi possível conectar a conta Apple');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo {'\n'}
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInButton
            title='Entrar com Google'
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInButton
            title='Entrar com Apple'
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shapes}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}
