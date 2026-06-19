import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { getDestino } from "@/data/destinos";
import { imagenPorCiudad } from "@/data/imagenesCiudades";
import {
  alojamientosPorDestino,
  aparcamientoPmrPorDestino,
  banosAccesiblesPorDestino,
  conciertosFestivalesPorDestino,
  museosAccesiblesPorDestino,
  queVerPorDestino,
  restaurantesAccesiblesPorDestino,
  seccionesIds,
  taxisAdaptadosPorDestino,
  teatrosAccesiblesPorDestino,
} from "@/data/guias";
import type { Ambito, SeccionId } from "@/data/types";
import { Card, EmptyState, IconCircle, OrientativeBanner, withAlpha } from "@/components/ui";
import { tCity, tPais } from "@/i18n/content";

const SECCION_META: Record<
  SeccionId,
  { iconName: string; iconLib: "feather" | "mci"; colorKey: "terracotta" | "olive" | "mediterranean" | "amber" }
> = {
  "que-ver": { iconName: "camera", iconLib: "feather", colorKey: "terracotta" },
  museos: { iconName: "image", iconLib: "feather", colorKey: "mediterranean" },
  teatros: { iconName: "drama-masks", iconLib: "mci", colorKey: "olive" },
  "conciertos-festivales": { iconName: "music", iconLib: "feather", colorKey: "terracotta" },
  "donde-comer": { iconName: "silverware-fork-knife", iconLib: "mci", colorKey: "amber" },
  hoteles: { iconName: "bed", iconLib: "mci", colorKey: "terracotta" },
  "taxis-adaptados": { iconName: "taxi", iconLib: "mci", colorKey: "olive" },
  "aparcamiento-pmr": { iconName: "parking", iconLib: "mci", colorKey: "mediterranean" },
  "banos-accesibles": { iconName: "human-male-female", iconLib: "mci", colorKey: "amber" },
  "como-llegar": { iconName: "navigation", iconLib: "feather", colorKey: "mediterranean" },
};

function tieneContenido(destinoId: string, seccion: SeccionId): boolean {
  switch (seccion) {
    case "que-ver":
      return (queVerPorDestino[destinoId] ?? []).length > 0;
    case "museos":
      return (museosAccesiblesPorDestino[destinoId] ?? []).length > 0;
    case "teatros":
      return (teatrosAccesiblesPorDestino[destinoId] ?? []).length > 0;
    case "conciertos-festivales":
      return (conciertosFestivalesPorDestino[destinoId] ?? []).length > 0;
    case "donde-comer":
      return (restaurantesAccesiblesPorDestino[destinoId] ?? []).length > 0;
    case "hoteles":
      return (alojamientosPorDestino[destinoId] ?? []).length > 0;
    case "taxis-adaptados":
      return (taxisAdaptadosPorDestino[destinoId] ?? []).length > 0;
    case "aparcamiento-pmr":
      return (aparcamientoPmrPorDestino[destinoId] ?? []).length > 0;
    case "banos-accesibles":
      return (banosAccesiblesPorDestino[destinoId] ?? []).length > 0;
    case "como-llegar":
      return true;
    default:
      return false;
  }
}

export default function GuiaDestinoScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const { ambito, destinoId } = useLocalSearchParams<{ ambito: Ambito; destinoId: string }>();
  const destino = getDestino(ambito ?? "internacional", destinoId);

  if (!destino) {
    return (
      <View style={{ flex: 1, backgroundColor: c.background }}>
        <DetailHeader title={t.stack.guia} />
        <View style={{ flex: 1, padding: 16 }}>
          <EmptyState iconName="map-pin" titulo={t.guias.destinoNoEncontrado} />
        </View>
      </View>
    );
  }

  const cityName = tCity(destino.nombre, lang);
  const seccionLabelLocalized = t.seccionLabel as Record<SeccionId, string>;
  const heroImg = imagenPorCiudad[destino.id];

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={cityName} />
      <ScrollView contentContainerStyle={{ paddingBottom: 64 }}>
        {heroImg ? (
          <Image
            source={heroImg}
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
            accessibilityIgnoresInvertColors
            accessible={false}
          />
        ) : null}
        <View style={{ padding: 16, gap: 12 }}>
        <View style={{ marginBottom: 4 }}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {cityName}
          </Text>
          <Text style={{ fontSize: 13, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
            {tPais(destino.pais, lang)}
          </Text>
        </View>

        {seccionesIds.map((s) => {
          const meta = SECCION_META[s];
          const hayContenido = tieneContenido(destino.id, s);
          return (
            <Card
              key={s}
              onPress={() =>
                router.push({
                  pathname: "/guia-seccion",
                  params: { ambito, destinoId: destino.id, seccion: s },
                } as any)
              }
              accessibilityLabel={`${seccionLabelLocalized[s]}. ${hayContenido ? t.guias.verDetalles : t.guias.pendienteInfo}`}
            >
              <View style={{ flexDirection: "row", alignItems: "center", padding: 14, gap: 12 }}>
                <IconCircle iconName={meta.iconName} iconLib={meta.iconLib} colorKey={meta.colorKey} size={44} iconSize={20} />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
                  >
                    {seccionLabelLocalized[s]}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: hayContenido ? c.mutedForeground : withAlpha(c.mutedForeground, 0.6),
                      marginTop: 2,
                      fontFamily: "Inter_400Regular",
                    }}
                  >
                    {hayContenido ? t.guias.verDetalles : t.guias.pendienteInfo}
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color={c.mutedForeground} />
              </View>
            </Card>
          );
        })}

        <OrientativeBanner texto={t.guias.orientativo} />
        </View>
      </ScrollView>
    </View>
  );
}
