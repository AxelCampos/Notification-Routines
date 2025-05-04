import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { ActivityIndicator, View } from 'react-native';
import { User } from 'firebase/auth';
import { auth } from '@/firebase/auth';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const segments = useSegments();
  const onAuthStateChanged = (user: User | null) => {
    console.log('User state changed:', user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  useEffect(() => {
    if (initializing) return;

    const [rootSegment, maybeSubRoute] = segments;
    const isAuthRoute = rootSegment === '(auth)';
    const isTabRoute = rootSegment === '(tabs)';

    if (user) {
      // Si ya estamos en un tab, no forzar push
      if (!isTabRoute) {
        router.replace('/(tabs)');
      }
    } else {
      // Si ya estamos en auth, dejarlo ahí
      if (!isAuthRoute) {
        router.replace('/(auth)/login');
      }
    }
  }, [initializing, user, segments, router]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
