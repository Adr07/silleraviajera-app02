import React from "react";
import { AppState, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { withAlpha } from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

const DETAIL_ROUTES = [
  "/hotel-destino",
  "/hotel-ficha",
  "/guia-destino",
  "/guia-seccion",
  "/consejos",
  "/consejo-detalle",
  "/informacion",
  "/favoritos",
  "/buscar",
  "/legal",
];

export function BetaNotice() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") setVisible(true);
    });
    return () => sub.remove();
  }, []);

  const onDetailRoute = DETAIL_ROUTES.some((r) => pathname.startsWith(r));

  if (!visible || onDetailRoute) return null;

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        top: insets.top + 56,
        left: 16,
        right: 16,
      }}
    >
      <View
        style={{
          borderRadius: 14,
          padding: 14,
          backgroundColor: c.card,
          borderWidth: 1,
          borderColor: withAlpha(c.terracotta, 0.3),
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          elevation: 6,
        }}
      >
        <Feather name="alert-circle" size={20} color={c.terracotta} style={{ marginTop: 2 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {t.home.betaTitulo}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 13,
              color: c.foreground,
              lineHeight: 19,
              fontFamily: "Inter_400Regular",
            }}
          >
            {t.home.betaTexto}
          </Text>
        </View>
        <Pressable
          onPress={() => setVisible(false)}
          accessibilityRole="button"
          accessibilityLabel={t.home.betaCerrar}
          hitSlop={10}
          style={{ padding: 4 }}
        >
          <Feather name="x" size={18} color={c.mutedForeground} />
        </Pressable>
      </View>
    </View>
  );
}
