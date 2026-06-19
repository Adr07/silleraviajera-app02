import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { destinosHotel, mapaHotelesPorAmbito } from "@/data/hoteles";
import type { Ambito } from "@/data/types";
import { BarraAmbito } from "@/components/BarraAmbito";
import { Button, Card, PageHeader, SectionLabel, withAlpha } from "@/components/ui";
import { tCity, tPais } from "@/i18n/content";
import { openExternal } from "@/utils/links";

export default function HotelesScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const [ambito, setAmbito] = useState<Ambito>("internacional");
  const list = destinosHotel.filter((d) => d.ambito === ambito);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <PageHeader
        titulo={t.hoteles.titulo}
        subtitulo={t.hoteles.subtitulo}
        iconName="briefcase"
        colorKey="terracotta"
      />
      <BarraAmbito tab={ambito} onChange={setAmbito} />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 96 }}>
        <Card>
          <View style={{ padding: 14, flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: withAlpha(c.mediterranean, 0.15),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="map" size={20} color={c.mediterranean} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "600", color: c.foreground, fontFamily: "Inter_600SemiBold" }}>
                {ambito === "internacional" ? t.hoteles.mapaInternacional : t.hoteles.mapaNacional}
              </Text>
              <Text style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
                {t.hoteles.abrirEnMaps}
              </Text>
            </View>
            <Button
              title={t.hoteles.abrir}
              variant="outline"
              iconName="external-link"
              onPress={() => openExternal(mapaHotelesPorAmbito[ambito])}
            />
          </View>
        </Card>

        <SectionLabel label={t.hoteles.destinos} />

        {list.map((d) => (
          <Card
            key={d.id}
            onPress={() =>
              router.push({ pathname: "/hotel-destino", params: { ambito, destinoId: d.id } } as any)
            }
          >
            <View style={{ flexDirection: "row", alignItems: "center", padding: 14, gap: 12 }}>
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: withAlpha(c.terracotta, 0.12),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="map-pin" size={20} color={c.terracotta} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
                >
                  {tCity(d.nombre, lang)}
                </Text>
                <Text
                  style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}
                >
                  {tPais(d.pais, lang)}
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
