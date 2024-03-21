import React from 'react';
import { Home } from './src/screens';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'matt-bl': require('./assets/fonts/Mattone-Black.otf'),
    'matt-b': require('./assets/fonts/Mattone-Bold.otf'),
    'matt': require('./assets/fonts/Mattone-Regular.otf'),
    'unblock': require('./assets/fonts/Unblock.ttf'),
    'inter': require('./assets/fonts/Inter-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }
  return <Home />;
}
