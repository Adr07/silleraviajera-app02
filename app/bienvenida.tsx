import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { withAlpha } from "@/components/ui";

export default function BienvenidaScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);

  const onEnter = React.useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
    router.replace("/(tabs)");
  }, [router]);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 28 }}>
          <Image
            source={require("../assets/images/portada.png")}
            style={{ width: "100%", height: 320, marginBottom: 32 }}
            resizeMode="contain"
            accessibilityLabel="Sillera World"
          />
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: c.foreground,
              fontFamily: "Inter_700Bold",
              textAlign: "center",
              lineHeight: 32,
            }}
          >
            {t.home.titulo}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: c.mutedForeground,
              fontFamily: "Inter_400Regular",
              textAlign: "center",
              marginTop: 12,
              lineHeight: 22,
            }}
          >
            {t.home.subtitulo}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: c.mutedForeground,
              fontFamily: "Inter_500Medium",
              textAlign: "center",
              marginTop: 20,
              letterSpacing: 0.3,
            }}
          >
            {t.bienvenida.porSilleraviajera}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
          <Pressable
            onPress={onEnter}
            accessibilityRole="button"
            accessibilityLabel={t.bienvenida.entrar}
            style={({ pressed }) => ({
              backgroundColor: pressed ? withAlpha(c.terracotta, 0.85) : c.terracotta,
              borderRadius: 14,
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            })}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: "700",
                fontFamily: "Inter_700Bold",
              }}
            >
              {t.bienvenida.entrar}
            </Text>
            <Feather name="arrow-right" size={18} color="#ffffff" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
