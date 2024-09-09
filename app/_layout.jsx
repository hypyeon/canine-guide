import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Text } from 'react-native';

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

  const renderTitle = (title) => {
    return (
      <Text style={{ fontFamily: 'RS-Reg', fontSize: 18, color: '#1e212b' }}>
        {title}
      </Text>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F8F7F4',
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: 'RS-Reg',
            fontSize: 18,
          },
          headerTintColor: '#1e212b',
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: '',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="menu" 
          options={{ 
            title: '',
          }} 
        />
        <Stack.Screen 
          name="donation"
          options={{
            title: '',
            headerRight: () => renderTitle('Donation'),
          }}
        />
        <Stack.Screen 
          name="adoption"
          options={{
            title: '',
            headerRight: () => renderTitle('Pre-adoption Manual'),
          }}
        />
        <Stack.Screen 
          name="guides"
          options={{
            title: '',
            headerRight: () => renderTitle('Guides for each life stage'),
          }}
        />
        <Stack.Screen 
          name="foods"
          options={{
            title: '',
            headerRight: () => renderTitle('Safe and Unsafe Food for Dogs'),
          }}
        />
        <Stack.Screen 
          name="communicating"
          options={{
            title: '',
            headerRight: () => renderTitle('Communicating with Dogs'),
          }}
        />
        <Stack.Screen 
          name="essentials"
          options={{
            title: '',
            headerRight: () => renderTitle('Pet Owner Essentials'),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
