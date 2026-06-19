import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { Card, IconCircle, SectionLabel, withAlpha } from "@/components/ui";

type ColorKey = "terracotta" | "olive" | "mediterranean" | "amber";

type Bloque = {
  titulo: string;
  descripcion: string;
  icon: string;
  iconLib: "feather" | "mci";
  colorKey: ColorKey;
  href: string;
};

export default function HomeScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);

  const bloques: Bloque[] = [
    { titulo: t.home.bloqueHotelesT, descripcion: t.home.bloqueHotelesD, icon: "briefcase", iconLib: "feather", colorKey: "terracotta", href: "/hoteles" },
    { titulo: t.home.bloqueGuiasT, descripcion: t.home.bloqueGuiasD, icon: "map", iconLib: "feather", colorKey: "mediterranean", href: "/guias" },
    { titulo: t.home.bloqueViajesT, descripcion: t.home.bloqueViajesD, icon: "navigation", iconLib: "feather", colorKey: "olive", href: "/viajes" },
    { titulo: t.home.bloqueConsejosT, descripcion: t.home.bloqueConsejosD, icon: "help-circle", iconLib: "feather", colorKey: "amber", href: "/consejos" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.background }} contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 28,
          paddingBottom: 32,
          backgroundColor: withAlpha(c.terracotta, 0.08),
          borderBottomWidth: 1,
          borderBottomColor: c.border,
        }}
      >
        <SectionLabel label={t.home.etiqueta} color={c.terracotta} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: c.foreground,
            marginTop: 8,
            fontFamily: "Inter_700Bold",
            lineHeight: 34,
          }}
        >
          {t.home.titulo}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: c.mutedForeground,
            marginTop: 10,
            lineHeight: 21,
            fontFamily: "Inter_400Regular",
          }}
        >
          {t.home.subtitulo}
        </Text>
      </View>

      <View style={{ padding: 20, gap: 14 }}>
        <SectionLabel label={t.home.explorar} />
        {bloques.map((b) => (
          <Card key={b.href} onPress={() => router.push(b.href as any)}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 14, padding: 16 }}>
              <IconCircle iconName={b.icon} iconLib={b.iconLib} colorKey={b.colorKey} size={48} iconSize={22} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                  {b.titulo}
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 13,
                    color: c.mutedForeground,
                    lineHeight: 19,
                    fontFamily: "Inter_400Regular",
                  }}
                >
                  {b.descripcion}
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color={c.mutedForeground} />
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
