import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

export function DetailHeader({ title }: { title?: string }) {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: c.card,
        paddingTop: insets.top,
        borderBottomWidth: 1,
        borderBottomColor: c.border,
      }}
    >
      <View style={{ height: 52, flexDirection: "row", alignItems: "center", paddingHorizontal: 6 }}>
        <Pressable
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace("/(tabs)");
            }
          }}
          accessibilityRole="button"
          accessibilityLabel={t.stack.atras}
          hitSlop={12}
          style={({ pressed }) => ({
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            paddingVertical: 8,
            paddingHorizontal: 6,
            minWidth: 92,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <Feather name="chevron-left" size={26} color={c.foreground} />
          <Text style={{ fontSize: 17, color: c.foreground, fontFamily: "Inter_400Regular" }}>
            {t.stack.atras}
          </Text>
        </Pressable>
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            textAlign: "center",
            marginRight: 92,
            fontSize: 17,
            color: c.foreground,
            fontFamily: "Inter_600SemiBold",
          }}
        >
          {title ?? ""}
        </Text>
      </View>
    </View>
  );
}
