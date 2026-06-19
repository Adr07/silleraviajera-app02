import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { viajesEjemplo } from "@/data/viajes";
import type { Tab } from "@/data/types";
import { Button, Card, PageHeader, withAlpha } from "@/components/ui";
import { FavoriteButton } from "@/components/FavoriteButton";
import { tViaje } from "@/i18n/content";
import { openExternal } from "@/utils/links";

function fmtFecha(s: string): string {
  if (!s) return "";
  const [y, m, d] = s.split("-");
  return `${d}/${m}/${y}`;
}

export default function ViajesScreen() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const [tab, setTab] = useState<Tab>("activos");
  const list = viajesEjemplo.filter((v) => v.estado === tab).map((v) => tViaje(v, lang));

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <PageHeader
        titulo={t.viajes.titulo}
        subtitulo={t.viajes.subtitulo}
        iconName="navigation"
        colorKey="olive"
      />
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: c.border,
          backgroundColor: c.card,
        }}
      >
        {([
          { v: "activos" as Tab, l: t.viajes.activos },
          { v: "proximos" as Tab, l: t.viajes.proximos },
        ]).map((it) => {
          const active = tab === it.v;
          return (
            <Pressable
              key={it.v}
              onPress={() => setTab(it.v)}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  borderBottomWidth: 2,
                  borderBottomColor: active ? c.primary : "transparent",
                  marginBottom: -1,
                },
                pressed && { opacity: 0.8 },
              ]}
            >
              <Text
                style={{
                  color: active ? c.primary : c.mutedForeground,
                  fontWeight: "600",
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                {it.l}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 96 }}>
        {list.map((v) => {
          const fechas =
            v.fechaInicio && v.fechaFin ? `${fmtFecha(v.fechaInicio)} – ${fmtFecha(v.fechaFin)}` : t.viajes.proximamente;
          const sinPlazas = v.plazasDisponibles === 0;
          return (
            <Card key={v.id}>
              <View style={{ position: "relative" }}>
                <Image source={{ uri: v.imagen }} style={{ width: "100%", height: 160 }} resizeMode="cover" />
                <View style={{ position: "absolute", top: 10, right: 10 }}>
                  <FavoriteButton
                    kind="viaje"
                    id={String(v.id)}
                    titulo={v.destino}
                    subtitulo={v.pais}
                    imagen={v.imagen}
                  />
                </View>
              </View>
              <View style={{ padding: 14, gap: 8 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Feather name="map-pin" size={14} color={c.terracotta} />
                  <Text style={{ fontSize: 17, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                    {v.destino}
                  </Text>
                  <Text style={{ fontSize: 13, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                    · {v.pais}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                  <Feather name="calendar" size={13} color={c.mutedForeground} />
                  <Text style={{ fontSize: 13, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                    {fechas}
                  </Text>
                </View>
                {v.notas ? (
                  <Text style={{ fontSize: 13, color: c.foreground, lineHeight: 19, fontFamily: "Inter_400Regular" }}>
                    {v.notas}
                  </Text>
                ) : null}
                {v.estado === "activos" ? (
                  <View style={{ flexDirection: "row", gap: 12, marginTop: 4 }}>
                    <View
                      style={{
                        flex: 1,
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: withAlpha(c.olive, 0.1),
                      }}
                    >
                      <Text style={{ fontSize: 11, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                        {t.viajes.plazasDisponibles}
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: "700", color: c.olive, fontFamily: "Inter_700Bold" }}>
                        {v.plazasDisponibles} / {v.plazasTotales}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: withAlpha(c.mediterranean, 0.1),
                      }}
                    >
                      <Text style={{ fontSize: 11, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                        {t.viajes.enCola}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: c.mediterranean,
                          fontFamily: "Inter_700Bold",
                        }}
                      >
                        {v.pasajerosEnCola}
                      </Text>
                    </View>
                  </View>
                ) : null}
                {v.reservaUrl ? (
                  <Button
                    title={sinPlazas ? t.viajes.listaEspera : t.viajes.masInfo}
                    iconName="external-link"
                    onPress={() => openExternal(v.reservaUrl!)}
                    style={{ marginTop: 6 }}
                  />
                ) : null}
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
