import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { getDestino } from "@/data/destinos";
import {
  alojamientosPorDestino,
  aparcamientoPmrPorDestino,
  banosAccesiblesPorDestino,
  conciertosFestivalesPorDestino,
  imagenPorSeccion,
  mapasPorDestinoSeccion,
  museosAccesiblesPorDestino,
  queVerPorDestino,
  restaurantesAccesiblesPorDestino,
  taxisAdaptadosPorDestino,
  teatrosAccesiblesPorDestino,
} from "@/data/guias";
import type {
  Ambito,
  AlojamientoGuia,
  ItemAccesible,
  ItemAparcamiento,
  LugarQueVer,
  SeccionId,
  TaxiAdaptado,
} from "@/data/types";
import { Badge, Button, Card, EmptyState, OrientativeBanner, SectionLabel, withAlpha } from "@/components/ui";
import { FavoriteButton } from "@/components/FavoriteButton";
import { tAparcamiento, tCity, tHotel, tItemAccesible, tPais, tQueVer, tTaxi } from "@/i18n/content";
import { openExternal } from "@/utils/links";

export default function GuiaSeccionScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const { ambito, destinoId, seccion } = useLocalSearchParams<{
    ambito: Ambito;
    destinoId: string;
    seccion: SeccionId;
  }>();

  const destino = getDestino(ambito ?? "internacional", destinoId);
  const seccionLabels = t.seccionLabel as Record<SeccionId, string>;
  const titulo = seccionLabels[seccion as SeccionId] ?? t.stack.seccion;
  const mapaUrl = mapasPorDestinoSeccion[destinoId]?.[seccion as SeccionId];

  if (!destino) {
    return (
      <View style={{ flex: 1, backgroundColor: c.background }}>
        <DetailHeader title={titulo} />
        <View style={{ flex: 1, padding: 16 }}>
          <EmptyState iconName="map-pin" titulo={t.guias.destinoNoEncontrado} />
        </View>
      </View>
    );
  }

  const cityName = tCity(destino.nombre, lang);
  const heroImagen = imagenPorSeccion[seccion as SeccionId];

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={titulo} />
      <ScrollView contentContainerStyle={{ paddingBottom: 64 }}>
        {heroImagen ? (
          <Image
            source={heroImagen}
            style={{ width: "100%", height: 160, backgroundColor: c.muted }}
            resizeMode="cover"
            accessibilityIgnoresInvertColors
            accessible={false}
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: 160,
              backgroundColor: withAlpha(c.mediterranean, 0.12),
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderBottomColor: withAlpha(c.mediterranean, 0.2),
            }}
            accessible={false}
          >
            <View
              style={{
                width: 88,
                height: 88,
                borderRadius: 44,
                backgroundColor: withAlpha(c.mediterranean, 0.18),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="navigation" size={40} color={c.mediterranean} />
            </View>
          </View>
        )}
        <View style={{ padding: 16, gap: 14 }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {titulo}
          </Text>
          <Text style={{ fontSize: 13, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
            {cityName}, {tPais(destino.pais, lang)}
          </Text>
        </View>

        {mapaUrl ? (
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 14, gap: 12 }}>
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
                  {t.guias.mapaAccesible}
                </Text>
                <Text style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}>
                  {t.guias.abrirMaps}
                </Text>
              </View>
              <Button title={t.guias.abrir} variant="outline" iconName="external-link" onPress={() => openExternal(mapaUrl)} />
            </View>
          </Card>
        ) : null}

        <SeccionContenido
          seccion={seccion as SeccionId}
          destinoId={destino.id}
          destinoNombre={cityName}
          lang={lang}
          onHotel={(hotelId) =>
            router.push({
              pathname: "/hotel-ficha",
              params: { ambito, destinoId: destino.id, hotelId },
            } as any)
          }
        />

        <OrientativeBanner texto={t.guias.orientativoSeccion} />
        </View>
      </ScrollView>
    </View>
  );
}

function SeccionContenido({
  seccion,
  destinoId,
  destinoNombre,
  lang,
  onHotel,
}: {
  seccion: SeccionId;
  destinoId: string;
  destinoNombre: string;
  lang: Lang;
  onHotel: (hotelId: string) => void;
}) {
  switch (seccion) {
    case "que-ver":
      return <ListaQueVer items={queVerPorDestino[destinoId] ?? []} destinoId={destinoId} lang={lang} />;
    case "museos":
      return (
        <ListaAccesibles
          items={museosAccesiblesPorDestino[destinoId] ?? []}
          icon="image"
          destinoId={destinoId}
          lang={lang}
        />
      );
    case "teatros":
      return (
        <ListaAccesibles
          items={teatrosAccesiblesPorDestino[destinoId] ?? []}
          icon="film"
          destinoId={destinoId}
          lang={lang}
        />
      );
    case "conciertos-festivales":
      return (
        <ListaAccesibles
          items={conciertosFestivalesPorDestino[destinoId] ?? []}
          icon="music"
          mostrarDetalle
          destinoId={destinoId}
          lang={lang}
        />
      );
    case "donde-comer":
      return (
        <ListaAccesibles
          items={restaurantesAccesiblesPorDestino[destinoId] ?? []}
          iconLib="mci"
          icon="silverware-fork-knife"
          destinoId={destinoId}
          lang={lang}
        />
      );
    case "hoteles":
      return (
        <ListaHoteles
          items={alojamientosPorDestino[destinoId] ?? []}
          destinoNombre={destinoNombre}
          lang={lang}
          onHotel={onHotel}
        />
      );
    case "taxis-adaptados":
      return <ListaTaxis items={taxisAdaptadosPorDestino[destinoId] ?? []} destinoId={destinoId} lang={lang} />;
    case "aparcamiento-pmr":
      return <ListaAparcamiento items={aparcamientoPmrPorDestino[destinoId] ?? []} destinoId={destinoId} lang={lang} />;
    case "banos-accesibles":
      return (
        <ListaAccesibles
          items={banosAccesiblesPorDestino[destinoId] ?? []}
          iconLib="mci"
          icon="human-male-female"
          mostrarDetalle
          destinoId={destinoId}
          lang={lang}
        />
      );
    case "como-llegar":
      return <ComoLlegar />;
    default:
      return null;
  }
}

function ListaQueVer({ items, destinoId, lang }: { items: LugarQueVer[]; destinoId: string; lang: Lang }) {
  const t = useUi(lang);
  if (items.length === 0) {
    return <EmptyState iconName="camera" titulo={t.guias.sinLugares} subtitulo={t.guias.sinLugaresSub} />;
  }
  const localized = items.map((it) => tQueVer(it, lang, destinoId));
  const ver = localized.filter((i) => i.tipo !== "hacer");
  const hacer = localized.filter((i) => i.tipo === "hacer");
  return (
    <View style={{ gap: 12 }}>
      {ver.length > 0 && (
        <View style={{ gap: 8 }}>
          <SectionLabel label={t.guias.queVer} />
          {ver.map((it, idx) => <ItemQueVer key={`${it.nombre}-${idx}`} item={it} />)}
        </View>
      )}
      {hacer.length > 0 && (
        <View style={{ gap: 8 }}>
          <SectionLabel label={t.guias.queHacer} />
          {hacer.map((it, idx) => <ItemQueVer key={`${it.nombre}-${idx}`} item={it} />)}
        </View>
      )}
    </View>
  );
}

function ItemQueVer({ item }: { item: LugarQueVer }) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  return (
    <Card>
      <View style={{ padding: 14, gap: 6 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Feather name="map-pin" size={14} color={c.terracotta} />
          <Text style={{ flex: 1, fontWeight: "600", color: c.foreground, fontFamily: "Inter_600SemiBold" }}>
            {item.nombre}
          </Text>
          {item.verificado === false ? (
            <Badge label={t.badges.sinVerificar} colorKey="mediterranean" />
          ) : (
            <Badge label={t.badges.verificado} colorKey="olive" />
          )}
        </View>
        {item.detalle ? (
          <Text style={{ fontSize: 13, color: c.mutedForeground, lineHeight: 19, fontFamily: "Inter_400Regular" }}>
            {item.detalle}
          </Text>
        ) : null}
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          {item.web ? (
            <Button title={t.guias.masInformacion} variant="outline" iconName="external-link" onPress={() => openExternal(item.web!)} />
          ) : null}
          {item.reservasEmail ? (
            <Button title={item.reservasEmail} variant="outline" iconName="mail" onPress={() => openExternal(`mailto:${item.reservasEmail}`)} />
          ) : null}
        </View>
      </View>
    </Card>
  );
}

function ListaAccesibles({
  items,
  icon,
  iconLib = "feather",
  mostrarDetalle,
  destinoId,
  lang,
}: {
  items: ItemAccesible[];
  icon: string;
  iconLib?: "feather" | "mci";
  mostrarDetalle?: boolean;
  destinoId: string;
  lang: Lang;
}) {
  const c = useColors();
  const t = useUi(lang);
  if (items.length === 0) {
    return <EmptyState iconName={icon} iconLib={iconLib} titulo={t.guias.sinInformacion} />;
  }
  const localized = items.map((it) => tItemAccesible(it, lang, destinoId));
  return (
    <View style={{ gap: 8 }}>
      {localized.map((it, idx) => (
        <Card key={`${it.nombre}-${idx}`}>
          <View style={{ padding: 14, gap: 6 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              {iconLib === "mci" ? (
                <MaterialCommunityIcons name={icon as any} size={16} color={c.mediterranean} />
              ) : (
                <Feather name={icon as any} size={16} color={c.mediterranean} />
              )}
              <Text style={{ flex: 1, fontWeight: "600", color: c.foreground, fontFamily: "Inter_600SemiBold" }}>
                {it.nombre}
              </Text>
              {it.verificado === false ? (
                <Badge label={t.badges.sinVerificar} colorKey="mediterranean" />
              ) : (
                <Badge label={t.badges.verificado} colorKey="olive" />
              )}
            </View>
            {mostrarDetalle && it.detalle ? (
              <Text style={{ fontSize: 13, color: c.mutedForeground, lineHeight: 19, fontFamily: "Inter_400Regular" }}>
                {it.detalle}
              </Text>
            ) : null}
            <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
              {it.web ? (
                <Button title={t.guias.masInformacion} variant="outline" iconName="external-link" onPress={() => openExternal(it.web!)} />
              ) : null}
              {it.reservasEmail ? (
                <Button title={it.reservasEmail} variant="outline" iconName="mail" onPress={() => openExternal(`mailto:${it.reservasEmail}`)} />
              ) : null}
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}

function ListaHoteles({
  items,
  destinoNombre,
  lang,
  onHotel,
}: {
  items: AlojamientoGuia[];
  destinoNombre: string;
  lang: Lang;
  onHotel: (hotelId: string) => void;
}) {
  const c = useColors();
  const t = useUi(lang);
  if (items.length === 0) {
    return <EmptyState iconName="bed" iconLib="mci" titulo={t.guias.sinHoteles} />;
  }
  const localized = items.map((h) => tHotel(h, lang));
  const verificados = localized.filter((h) => h.verificado !== false);
  const aconsejados = localized.filter((h) => h.verificado === false);

  return (
    <View style={{ gap: 14 }}>
      {verificados.length > 0 && (
        <View style={{ gap: 10 }}>
          <SectionLabel label={t.hotelDestino.verificadosLabel} color={c.olive} />
          {verificados.map((h) => (
            <HotelGuiaCard key={h.id} hotel={h} destinoNombre={destinoNombre} mostrarVideo onPress={() => onHotel(h.id)} />
          ))}
        </View>
      )}
      {aconsejados.length > 0 && (
        <View style={{ gap: 10 }}>
          <SectionLabel label={t.hotelDestino.aconsejadosLabel} color={c.mutedForeground} />
          {aconsejados.map((h) => (
            <HotelGuiaCard key={h.id} hotel={h} destinoNombre={destinoNombre} mostrarVideo={false} onPress={() => onHotel(h.id)} />
          ))}
        </View>
      )}
    </View>
  );
}

function HotelGuiaCard({
  hotel,
  destinoNombre,
  mostrarVideo,
  onPress,
}: {
  hotel: AlojamientoGuia;
  destinoNombre: string;
  mostrarVideo: boolean;
  onPress: () => void;
}) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const thumb = hotel.imagen ?? null;
  const imageSource = thumb ? { uri: thumb } : require("../assets/images/hoteles/generico.jpg");
  return (
    <Card onPress={onPress}>
      <View style={{ flexDirection: "row", padding: 12, gap: 12 }}>
        <Image
          source={imageSource}
          style={{ width: 96, height: 72, borderRadius: 10 }}
          resizeMode="cover"
          accessible={false}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
        <View style={{ flex: 1, gap: 4 }}>
          <Text numberOfLines={2} style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {hotel.nombre}
          </Text>
          <Text numberOfLines={2} style={{ fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
            {hotel.descripcion}
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {mostrarVideo && hotel.videoId ? <Badge label={t.badges.video} colorKey="terracotta" /> : null}
            {hotel.verificado !== false ? (
              <Badge label={t.badges.verificado} colorKey="olive" />
            ) : (
              <Badge label={t.badges.aconsejado} colorKey="mediterranean" />
            )}
          </View>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
          <FavoriteButton kind="hotel" id={hotel.id} titulo={hotel.nombre} subtitulo={destinoNombre} imagen={thumb} size={20} />
          <Feather name="chevron-right" size={18} color={c.mutedForeground} />
        </View>
      </View>
    </Card>
  );
}

function ListaTaxis({ items, destinoId, lang }: { items: TaxiAdaptado[]; destinoId: string; lang: Lang }) {
  const c = useColors();
  const t = useUi(lang);
  if (items.length === 0) {
    return <EmptyState iconName="taxi" iconLib="mci" titulo={t.guias.sinTaxis} subtitulo={t.guias.sinTaxisSub} />;
  }
  const localized = items.map((tx) => tTaxi(tx, lang, destinoId));
  return (
    <View style={{ gap: 10 }}>
      {localized.map((tx, idx) => (
        <Card key={`${tx.empresa}-${idx}`}>
          <View style={{ padding: 14, gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <MaterialCommunityIcons name="taxi" size={18} color={c.olive} />
              <Text style={{ flex: 1, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                {tx.empresa}
              </Text>
              {tx.verificado === false ? (
                <Badge label={t.badges.sinVerificar} colorKey="mediterranean" />
              ) : (
                <Badge label={t.badges.verificado} colorKey="olive" />
              )}
            </View>
            {tx.nota ? (
              <Text style={{ fontSize: 13, color: c.mutedForeground, lineHeight: 19, fontFamily: "Inter_400Regular" }}>
                {tx.nota}
              </Text>
            ) : null}
            <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
              {tx.web ? (
                <Button title={t.guias.masInformacion} variant="outline" iconName="external-link" onPress={() => openExternal(tx.web!)} />
              ) : null}
              {tx.telefono ? (
                <Button title={tx.telefono} variant="outline" iconName="phone" onPress={() => openExternal(`tel:${tx.telefono}`)} />
              ) : null}
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}

function ListaAparcamiento({ items, destinoId, lang }: { items: ItemAparcamiento[]; destinoId: string; lang: Lang }) {
  const c = useColors();
  const t = useUi(lang);
  if (items.length === 0) {
    return <EmptyState iconName="parking" iconLib="mci" titulo={t.guias.sinAparcamiento} />;
  }
  const localized = items.map((it, idx) => tAparcamiento(it, lang, destinoId, idx));
  return (
    <View style={{ gap: 10 }}>
      {localized.map((it, idx) => (
        <Card key={idx}>
          <View style={{ padding: 14, gap: 6, flexDirection: "row" }}>
            <MaterialCommunityIcons name="parking" size={18} color={c.mediterranean} style={{ marginTop: 2 }} />
            <Text style={{ flex: 1, fontSize: 14, color: c.foreground, lineHeight: 20, fontFamily: "Inter_400Regular" }}>
              {it.texto}
            </Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

function ComoLlegar() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const opciones = [t.guias.transporteTren, t.guias.transporteMetro, t.guias.transporteTranvia, t.guias.transporteAutobus];
  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontSize: 14, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
        {t.guias.opcionesTransporte}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {opciones.map((label) => (
          <View
            key={label}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: withAlpha(c.mediterranean, 0.35),
              backgroundColor: withAlpha(c.mediterranean, 0.1),
            }}
          >
            <Text style={{ fontSize: 13, color: c.foreground, fontFamily: "Inter_500Medium" }}>{label}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 12, color: c.mutedForeground, lineHeight: 18, fontFamily: "Inter_400Regular" }}>
        {t.guias.confirmaTransporte}
      </Text>
    </View>
  );
}
