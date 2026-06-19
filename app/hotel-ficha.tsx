import React from "react";
import { ScrollView, Share, Text, View } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { destinosHotel, hotelesData } from "@/data/hoteles";
import type { Ambito } from "@/data/types";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  Estrellas,
  OrientativeBanner,
  SectionLabel,
  withAlpha,
} from "@/components/ui";
import { FavoriteButton } from "@/components/FavoriteButton";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { tCity, tHotel, tPais } from "@/i18n/content";
import { buildMailto, openExternal } from "@/utils/links";

export default function HotelFichaScreen() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const { destinoId, hotelId } = useLocalSearchParams<{
    ambito: Ambito;
    destinoId: string;
    hotelId: string;
  }>();

  const destino = destinosHotel.find((d) => d.id === destinoId);
  const hotelRaw = hotelesData.find((h) => h.id === hotelId);
  const hotel = hotelRaw ? tHotel(hotelRaw, lang) : undefined;

  if (!hotel || !destino) {
    return (
      <View style={{ flex: 1, backgroundColor: c.background }}>
        <DetailHeader title={t.stack.hotel} />
        <View style={{ flex: 1, padding: 16 }}>
          <EmptyState iconName="bed" iconLib="mci" titulo={t.hotelFicha.hotelNoEncontrado} />
        </View>
      </View>
    );
  }

  const verificado = hotel.verificado !== false;
  const heroImg = hotel.imagen ?? null;
  const heroSource = heroImg ? { uri: heroImg } : require("../assets/images/hoteles/generico.jpg");
  const cityName = tCity(destino.nombre, lang);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={hotel.nombre} />
      <ScrollView contentContainerStyle={{ paddingBottom: 96 }}>
        <View style={{ position: "relative" }}>
          <Image
            source={heroSource}
            style={{ width: "100%", height: 220 }}
            contentFit="cover"
            cachePolicy="disk"
            transition={200}
            accessibilityIgnoresInvertColors
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no"
          />
          <View style={{ position: "absolute", top: 12, right: 12 }}>
            <FavoriteButton
              kind="hotel"
              id={hotel.id}
              titulo={hotel.nombre}
              subtitulo={cityName}
              imagen={heroImg}
            />
          </View>
        </View>

        <View style={{ padding: 16, gap: 14 }}>
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 22, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
              {hotel.nombre}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Feather name="map-pin" size={14} color={c.mutedForeground} />
              <Text style={{ fontSize: 13, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                {cityName}, {tPais(destino.pais, lang)}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 4 }}>
              {hotel.estrellas > 0 ? <Estrellas n={hotel.estrellas} /> : null}
              {hotel.precio && hotel.precio !== "—" ? (
                <Text style={{ fontSize: 13, color: c.mutedForeground, fontFamily: "Inter_500Medium" }}>
                  {hotel.precio}
                </Text>
              ) : null}
              {verificado ? (
                <Badge label={t.hotelFicha.verificadoBadge} colorKey="olive" />
              ) : (
                <Badge label={t.hotelFicha.aconsejadoBadge} colorKey="mediterranean" />
              )}
            </View>
          </View>

          {hotel.descripcion ? (
            <Text style={{ fontSize: 14, color: c.foreground, lineHeight: 21, fontFamily: "Inter_400Regular" }}>
              {hotel.descripcion}
            </Text>
          ) : null}

          {hotel.accesibilidad.length > 0 && (
            <Card>
              <View style={{ padding: 14, gap: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <MaterialCommunityIcons name="wheelchair-accessibility" size={18} color={c.olive} />
                  <Text style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                    {t.hotelFicha.accesibilidad}
                  </Text>
                </View>
                {hotel.accesibilidad.map((item) => (
                  <View
                    key={item}
                    style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}
                    accessible
                    accessibilityLabel={`${t.hotelFicha.disponible}: ${item}`}
                  >
                    <Feather
                      name="check"
                      size={16}
                      color={c.olive}
                      style={{ marginTop: 2 }}
                      accessibilityElementsHidden
                      importantForAccessibility="no"
                    />
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: c.foreground,
                        lineHeight: 20,
                        fontFamily: "Inter_400Regular",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </Card>
          )}

          {verificado && (
            <View style={{ gap: 8 }}>
              <SectionLabel label={t.hotelFicha.asiEs} />
              <YouTubeEmbed videoId={hotel.videoId} videoUrl={hotel.videoUrl} title={hotel.nombre} />
            </View>
          )}

          <View style={{ gap: 10, marginTop: 4 }}>
            {hotel.bookingUrl ? (
              <Button
                title={t.hotelFicha.reservar}
                iconName="external-link"
                onPress={() => openExternal(hotel.bookingUrl!)}
              />
            ) : null}
            <Button
              title={t.hotelFicha.solicitarInfo}
              variant="outline"
              iconName="mail"
              onPress={() =>
                openExternal(
                  buildMailto(
                    "info@silleraviajera.com",
                    hotel.infoEmailSubject,
                    `${t.email.hola},\n\n${t.email.deseoHotel} "${hotel.nombre}" ${lang === "es" ? "en" : "in"} ${cityName}.\n\n${t.email.gracias}`,
                  ),
                )
              }
            />
            <Button
              title={t.hotelFicha.compartir}
              variant="outline"
              iconName="share-2"
              onPress={() => {
                const message = t.hotelFicha.compartirMensaje
                  .replace("{nombre}", hotel.nombre)
                  .replace("{ciudad}", cityName)
                  .replace("{pais}", tPais(destino.pais, lang));
                Share.share({ message, title: hotel.nombre }).catch(() => {});
              }}
            />
          </View>

          <OrientativeBanner texto={t.hotelFicha.orientativo} />
        </View>
      </ScrollView>
    </View>
  );
}
