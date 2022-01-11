import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/screens/Dashboard';
import theme from './src/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style='dark' />
    </ThemeProvider>
  );
}
