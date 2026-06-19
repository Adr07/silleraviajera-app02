import React from "react";
import { Pressable, ScrollView, Share, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { bloquesInfo } from "@/data/informacion";
import { Card, IconCircle, PageHeader, withAlpha } from "@/components/ui";
import { LanguageRow } from "@/components/LanguageSelector";
import { tBloqueInfo } from "@/i18n/content";

export default function InformacionScreen() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={t.stack.informacion} />
      <PageHeader
        titulo={t.informacion.titulo}
        subtitulo={t.informacion.subtitulo}
        iconName="info"
        colorKey="mediterranean"
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 32 }}>
        <LanguageRow />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t.compartir.boton}
          onPress={() => {
            Share.share({ message: t.compartir.mensaje, title: t.compartir.titulo }).catch(() => {});
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.85 : 1,
            borderRadius: 14,
            padding: 14,
            backgroundColor: withAlpha(c.terracotta, 0.1),
            borderWidth: 1,
            borderColor: withAlpha(c.terracotta, 0.3),
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          })}
        >
          <IconCircle iconName="share-2" iconLib="feather" colorKey="terracotta" size={40} iconSize={18} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
              {t.compartir.boton}
            </Text>
            <Text style={{ marginTop: 2, fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
              {t.compartir.descripcion}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={c.mutedForeground} />
        </Pressable>
        {bloquesInfo.map((raw) => {
          const b = tBloqueInfo(raw, lang);
          return (
            <Card key={b.id}>
              <View style={{ padding: 16, gap: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                  <IconCircle iconName={b.iconName} iconLib="feather" colorKey={b.colorKey} size={40} iconSize={18} />
                  <Text style={{ flex: 1, fontSize: 17, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                    {b.titulo}
                  </Text>
                </View>
                {b.parrafos.map((p, idx) => (
                  <Text
                    key={idx}
                    style={{ fontSize: 14, color: c.foreground, lineHeight: 22, fontFamily: "Inter_400Regular" }}
                  >
                    {p}
                  </Text>
                ))}
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
