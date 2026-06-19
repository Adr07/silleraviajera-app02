import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { Card, IconCircle, PageHeader } from "@/components/ui";
import { LanguageRow } from "@/components/LanguageSelector";

type ColorKey = "terracotta" | "olive" | "mediterranean" | "amber";

type Item = {
  titulo: string;
  descripcion: string;
  icon: string;
  iconLib: "feather" | "mci";
  colorKey: ColorKey;
  href: string;
};

export default function MasScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);

  const items: Item[] = [
    { titulo: t.mas.ayudaT, descripcion: t.mas.ayudaD, icon: "help-circle", iconLib: "feather", colorKey: "amber", href: "/consejos" },
    { titulo: t.mas.favoritosT, descripcion: t.mas.favoritosD, icon: "heart", iconLib: "feather", colorKey: "terracotta", href: "/favoritos" },
    { titulo: t.mas.buscarT, descripcion: t.mas.buscarD, icon: "search", iconLib: "feather", colorKey: "mediterranean", href: "/buscar" },
    { titulo: t.mas.infoT, descripcion: t.mas.infoD, icon: "info", iconLib: "feather", colorKey: "olive", href: "/informacion" },
    { titulo: t.mas.legalT, descripcion: t.mas.legalD, icon: "shield", iconLib: "feather", colorKey: "mediterranean", href: "/legal" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <PageHeader
        titulo={t.mas.titulo}
        subtitulo={t.mas.subtitulo}
        iconName="more-horizontal"
        colorKey="mediterranean"
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 96 }}>
        <LanguageRow />
        {items.map((it) => (
          <Card
            key={it.href}
            onPress={() => router.push(it.href as any)}
            accessibilityLabel={`${it.titulo}. ${it.descripcion}`}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 14, padding: 16 }}>
              <IconCircle iconName={it.icon} iconLib={it.iconLib} colorKey={it.colorKey} size={44} iconSize={20} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                  {it.titulo}
                </Text>
                <Text style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
                  {it.descripcion}
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color={c.mutedForeground} />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
