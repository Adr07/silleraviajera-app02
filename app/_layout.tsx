import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import { BetaNotice } from "@/components/BetaNotice";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { useColors } from "@/hooks/useColors";
import { useUi } from "@/i18n/ui";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "bienvenida",
};

const queryClient = new QueryClient();

function RootLayoutNav() {
  const c = useColors();
  const { lang, loaded } = useLang();
  const t = useUi(lang);
  if (!loaded) return null;
  return (
    <View style={{ flex: 1 }}>
      <Stack
        initialRouteName="bienvenida"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
          contentStyle: { backgroundColor: c.background },
        }}
      >
      <Stack.Screen name="bienvenida" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="legal" options={{ title: t.legal.titulo }} />
      <Stack.Screen name="hotel-destino" options={{ title: t.stack.hoteles }} />
      <Stack.Screen name="hotel-ficha" options={{ title: t.stack.hotel }} />
      <Stack.Screen name="guia-destino" options={{ title: t.stack.guia }} />
      <Stack.Screen name="guia-seccion" options={{ title: t.stack.seccion }} />
      <Stack.Screen name="consejos" options={{ title: t.stack.ayuda }} />
      <Stack.Screen name="consejo-detalle" options={{ title: t.stack.ayuda }} />
      <Stack.Screen name="informacion" options={{ title: t.stack.informacion }} />
      <Stack.Screen name="favoritos" options={{ title: t.stack.favoritos }} />
      <Stack.Screen name="buscar" options={{ title: t.stack.buscar }} />
      </Stack>
      <BetaNotice />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <FavoritesProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <KeyboardProvider>
                  <RootLayoutNav />
                </KeyboardProvider>
              </GestureHandlerRootView>
            </FavoritesProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
