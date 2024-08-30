import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "RS-Reg": require('../assets/fonts/RobotoSlab-Regular.ttf'),
    "RS-Li": require('../assets/fonts/RobotoSlab-Light.ttf'),
    "RS-Med": require('../assets/fonts/RobotoSlab-Medium.ttf'),
    "RS-ExLi": require('../assets/fonts/RobotoSlab-ExtraLight.ttf'),
    "Ruda-Reg": require('../assets/fonts/Ruda-Regular.ttf'),
    "Ruda-Med": require('../assets/fonts/Ruda-Medium.ttf'),
    "Ruda-SB": require('../assets/fonts/Ruda-SemiBold.ttf'),
    "Ruda-B": require('../assets/fonts/Ruda-Bold.ttf'),
    "Ruda-ExB": require('../assets/fonts/Ruda-ExtraBold.ttf'),
    "Ruda-Med": require('../assets/fonts/Ruda-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
