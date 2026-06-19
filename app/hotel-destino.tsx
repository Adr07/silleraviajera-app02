import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { destinosHotel, hotelesData } from "@/data/hoteles";
import type { Ambito } from "@/data/types";
import { Badge, Card, EmptyState, SectionLabel, withAlpha } from "@/components/ui";
import { FavoriteButton } from "@/components/FavoriteButton";
import { tCity, tPais } from "@/i18n/content";

export default function HotelDestinoScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const { ambito, destinoId } = useLocalSearchParams<{ ambito: Ambito; destinoId: string }>();

  const destino = destinosHotel.find((d) => d.id === destinoId);
  const hoteles = hotelesData.filter((h) => h.destinoId === destinoId);
  const verificados = hoteles.filter((h) => h.verificado !== false);
  const aconsejados = hoteles.filter((h) => h.verificado === false);

  if (!destino) {
    return (
      <View style={{ flex: 1, backgroundColor: c.background }}>
        <DetailHeader title={t.stack.hoteles} />
        <View style={{ flex: 1, padding: 16 }}>
          <EmptyState iconName="map-pin" titulo={t.hotelDestino.destinoNoEncontrado} />
        </View>
      </View>
    );
  }

  const cityName = tCity(destino.nombre, lang);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={cityName} />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 64 }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {t.hotelDestino.hotelesEn} {cityName}
          </Text>
          <Text style={{ fontSize: 13, color: c.mutedForeground, marginTop: 4, fontFamily: "Inter_400Regular" }}>
            {tPais(destino.pais, lang)}
          </Text>
        </View>

        {verificados.length > 0 && (
          <View style={{ gap: 10 }}>
            <SectionLabel label={t.hotelDestino.verificadosLabel} color={c.olive} />
            {verificados.map((h) => (
              <HotelRow
                key={h.id}
                hotel={h}
                ambito={ambito}
                onPress={() =>
                  router.push({
                    pathname: "/hotel-ficha",
                    params: { ambito, destinoId: destino.id, hotelId: h.id },
                  } as any)
                }
              />
            ))}
          </View>
        )}

        {aconsejados.length > 0 && (
          <View style={{ gap: 10 }}>
            <SectionLabel label={t.hotelDestino.aconsejadosLabel} color={c.mutedForeground} />
            {aconsejados.map((h) => (
              <HotelRow
                key={h.id}
                hotel={h}
                ambito={ambito}
                onPress={() =>
                  router.push({
                    pathname: "/hotel-ficha",
                    params: { ambito, destinoId: destino.id, hotelId: h.id },
                  } as any)
                }
              />
            ))}
          </View>
        )}

        {hoteles.length === 0 && (
          <EmptyState
            iconName="bed"
            iconLib="mci"
            titulo={t.hotelDestino.sinHoteles}
            subtitulo={t.hotelDestino.prontoHoteles}
          />
        )}
      </ScrollView>
    </View>
  );
}

function HotelRow({
  hotel,
  ambito,
  onPress,
}: {
  hotel: (typeof hotelesData)[number];
  ambito: Ambito;
  onPress: () => void;
}) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const verificado = hotel.verificado !== false;
  const thumb = hotel.imagen ?? null;
  const imageSource = thumb ? { uri: thumb } : require("../assets/images/hoteles/generico.jpg");
  return (
    <Card onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 12, padding: 12 }}>
        <Image
          source={imageSource}
          style={{ width: 96, height: 72, borderRadius: 10 }}
          resizeMode="cover"
          accessible={false}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
        <View style={{ flex: 1, gap: 4 }}>
          <Text
            numberOfLines={2}
            style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
          >
            {hotel.nombre}
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
            {verificado ? (
              <Badge label={t.badges.verificado} colorKey="olive" />
            ) : (
              <Badge label={t.badges.aconsejado} colorKey="mediterranean" />
            )}
            {hotel.videoId ? <Badge label={t.badges.video} colorKey="terracotta" /> : null}
          </View>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
          <FavoriteButton
            kind="hotel"
            id={hotel.id}
            titulo={hotel.nombre}
            subtitulo={hotel.destinoId}
            imagen={thumb}
            size={20}
          />
          <Feather name="chevron-right" size={18} color={c.mutedForeground} />
        </View>
      </View>
    </Card>
  );
}
