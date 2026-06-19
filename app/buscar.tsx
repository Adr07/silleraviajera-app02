import React, { useMemo, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { destinosHotel, hotelesData } from "@/data/hoteles";
import { destinosInternacionales, destinosNacionales } from "@/data/destinos";
import { viajesEjemplo } from "@/data/viajes";
import { Card, EmptyState, SectionLabel, withAlpha } from "@/components/ui";
import { tCity, tHotel, tPais, tViaje } from "@/i18n/content";

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function BuscarScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const [q, setQ] = useState("");
  const query = norm(q.trim());

  const resultados = useMemo(() => {
    if (!query) return null;
    const matchesHotel = hotelesData.filter((h) => {
      const tr = tHotel(h, lang);
      return (
        norm(h.nombre).includes(query) ||
        norm(h.descripcion).includes(query) ||
        norm(tr.descripcion).includes(query)
      );
    });
    const matchesViaje = viajesEjemplo.filter((v) => {
      const tr = tViaje(v, lang);
      return (
        norm(v.destino).includes(query) ||
        norm(v.pais).includes(query) ||
        norm(tr.destino).includes(query) ||
        norm(tr.pais).includes(query)
      );
    });
    const matchesDestino = [...destinosInternacionales, ...destinosNacionales].filter(
      (d) =>
        norm(d.nombre).includes(query) ||
        norm(d.pais).includes(query) ||
        norm(tCity(d.nombre, lang)).includes(query) ||
        norm(tPais(d.pais, lang)).includes(query),
    );
    return { hoteles: matchesHotel, viajes: matchesViaje, destinos: matchesDestino };
  }, [query, lang]);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={t.buscar.titulo} />
      <View
        style={{
          padding: 16,
          backgroundColor: c.card,
          borderBottomWidth: 1,
          borderBottomColor: c.border,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 12,
            backgroundColor: withAlpha(c.muted, 0.6),
          }}
        >
          <Feather name="search" size={18} color={c.mutedForeground} />
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder={t.buscar.placeholder}
            placeholderTextColor={c.mutedForeground}
            style={{ flex: 1, fontSize: 15, color: c.foreground, fontFamily: "Inter_400Regular" }}
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 32 }}>
        {!resultados ? (
          <EmptyState
            iconName="search"
            titulo={t.buscar.vacioTitulo}
            subtitulo={t.buscar.vacioSubtitulo}
          />
        ) : (
          <>
            {resultados.destinos.length > 0 && (
              <View style={{ gap: 8 }}>
                <SectionLabel label={t.buscar.destinos} />
                {resultados.destinos.map((d) => {
                  const ambito = destinosInternacionales.some((x) => x.id === d.id) ? "internacional" : "nacional";
                  return (
                    <Card
                      key={d.id}
                      onPress={() => router.push({ pathname: "/guia-destino", params: { ambito, destinoId: d.id } } as any)}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", padding: 12, gap: 10 }}>
                        <Feather name="map-pin" size={16} color={c.mediterranean} />
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                            {tCity(d.nombre, lang)}
                          </Text>
                          <Text style={{ fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                            {tPais(d.pais, lang)}
                          </Text>
                        </View>
                        <Feather name="chevron-right" size={18} color={c.mutedForeground} />
                      </View>
                    </Card>
                  );
                })}
              </View>
            )}

            {resultados.hoteles.length > 0 && (
              <View style={{ gap: 8 }}>
                <SectionLabel label={t.buscar.hoteles} />
                {resultados.hoteles.map((h) => {
                  const destino = destinosHotel.find((d) => d.id === h.destinoId);
                  return (
                    <Card
                      key={h.id}
                      onPress={() =>
                        router.push({
                          pathname: "/hotel-ficha",
                          params: { ambito: destino?.ambito ?? "internacional", destinoId: h.destinoId, hotelId: h.id },
                        } as any)
                      }
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", padding: 12, gap: 10 }}>
                        <Feather name="briefcase" size={16} color={c.terracotta} />
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                            {h.nombre}
                          </Text>
                          <Text style={{ fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                            {destino ? tCity(destino.nombre, lang) : ""} · {destino ? tPais(destino.pais, lang) : ""}
                          </Text>
                        </View>
                        <Feather name="chevron-right" size={18} color={c.mutedForeground} />
                      </View>
                    </Card>
                  );
                })}
              </View>
            )}

            {resultados.viajes.length > 0 && (
              <View style={{ gap: 8 }}>
                <SectionLabel label={t.buscar.viajes} />
                {resultados.viajes.map((raw) => {
                  const v = tViaje(raw, lang);
                  return (
                    <Card key={v.id} onPress={() => router.push("/viajes" as any)}>
                      <View style={{ flexDirection: "row", alignItems: "center", padding: 12, gap: 10 }}>
                        <Feather name="navigation" size={16} color={c.olive} />
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                            {v.destino}
                          </Text>
                          <Text style={{ fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                            {v.pais} · {v.estado === "activos" ? t.buscar.activo : t.buscar.proximo}
                          </Text>
                        </View>
                        <Feather name="chevron-right" size={18} color={c.mutedForeground} />
                      </View>
                    </Card>
                  );
                })}
              </View>
            )}

            {resultados.destinos.length === 0 &&
              resultados.hoteles.length === 0 &&
              resultados.viajes.length === 0 && (
                <EmptyState iconName="search" titulo={t.buscar.sinResultados} subtitulo={t.buscar.sinResultadosSub} />
              )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
