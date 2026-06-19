import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { destinosInternacionales, destinosNacionales } from "@/data/destinos";
import { imagenPorCiudad } from "@/data/imagenesCiudades";
import type { Ambito } from "@/data/types";
import { BarraAmbito } from "@/components/BarraAmbito";
import { Card, PageHeader, SectionLabel, withAlpha } from "@/components/ui";
import { tCity, tPais } from "@/i18n/content";

export default function GuiasScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const [ambito, setAmbito] = useState<Ambito>("internacional");
  const list = ambito === "internacional" ? destinosInternacionales : destinosNacionales;

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <PageHeader
        titulo={t.guias.titulo}
        subtitulo={t.guias.subtitulo}
        iconName="map"
        colorKey="mediterranean"
      />
      <BarraAmbito tab={ambito} onChange={setAmbito} />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 96 }}>
        <SectionLabel label={t.guias.destinos} />
        {list.map((d) => {
          const img = imagenPorCiudad[d.id];
          const cityName = tCity(d.nombre, lang);
          const country = tPais(d.pais, lang);
          return (
            <Card
              key={d.id}
              onPress={() =>
                router.push({ pathname: "/guia-destino", params: { ambito, destinoId: d.id } } as any)
              }
              accessibilityLabel={`${cityName}, ${country}. ${t.guias.verDetalles}`}
            >
              <View style={{ flexDirection: "row", alignItems: "center", padding: 14, gap: 12 }}>
                {img ? (
                  <Image
                    source={img}
                    style={{ width: 88, height: 72, borderRadius: 12 }}
                    resizeMode="cover"
                    accessibilityIgnoresInvertColors
                    accessible={false}
                  />
                ) : (
                  <View
                    style={{
                      width: 88,
                      height: 72,
                      borderRadius: 12,
                      backgroundColor: withAlpha(c.mediterranean, 0.12),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Feather name="map-pin" size={22} color={c.mediterranean} />
                  </View>
                )}
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                    {cityName}
                  </Text>
                  <Text style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
                    {country}
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color={c.mutedForeground} />
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
