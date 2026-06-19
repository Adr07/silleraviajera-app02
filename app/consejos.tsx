import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { temas } from "@/data/consejos";
import { Card, IconCircle, PageHeader } from "@/components/ui";
import { tTema } from "@/i18n/content";

export default function ConsejosScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={t.consejos.titulo} />
      <PageHeader
        titulo={t.consejos.titulo}
        subtitulo={t.consejos.subtitulo}
        iconName="help-circle"
        colorKey="amber"
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 32 }}>
        {temas.map((raw) => {
          const tm = tTema(raw, lang);
          return (
            <Card
              key={tm.id}
              onPress={() => router.push({ pathname: "/consejo-detalle", params: { temaId: tm.id } } as any)}
            >
              <View style={{ flexDirection: "row", alignItems: "center", padding: 14, gap: 14 }}>
                <IconCircle iconName={tm.iconName} iconLib={tm.iconLib} colorKey={tm.colorKey} size={48} iconSize={22} />
                <Text style={{ flex: 1, fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                  {tm.titulo}
                </Text>
                <Feather name="chevron-right" size={20} color={c.mutedForeground} />
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
