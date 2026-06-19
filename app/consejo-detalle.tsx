import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { contenidoPorTema, getTema, imagenPorTema, type BloqueContenido } from "@/data/consejos";
import { Button, EmptyState, IconCircle, OrientativeBanner, withAlpha } from "@/components/ui";
import { tBloquesContenido, tTema } from "@/i18n/content";
import { openExternal } from "@/utils/links";

export default function ConsejoDetalleScreen() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const { temaId } = useLocalSearchParams<{ temaId: string }>();
  const temaRaw = getTema(temaId);
  const tema = temaRaw ? tTema(temaRaw, lang) : undefined;
  const bloquesRaw: BloqueContenido[] = (tema && contenidoPorTema[tema.id]) ?? [];
  const bloques = tema ? tBloquesContenido(tema.id, lang, bloquesRaw) : [];

  if (!tema) {
    return (
      <View style={{ flex: 1, backgroundColor: c.background }}>
        <DetailHeader title={t.stack.ayuda} />
        <View style={{ flex: 1, padding: 16 }}>
          <EmptyState iconName="help-circle" titulo={t.consejoDetalle.temaNoEncontrado} />
        </View>
      </View>
    );
  }

  const imagen = imagenPorTema[tema.id];

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={tema.titulo} />
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {imagen ? (
          <Image
            source={imagen}
            style={{ width: "100%", height: 180, backgroundColor: withAlpha(c[tema.colorKey], 0.08) }}
            resizeMode="cover"
            accessibilityIgnoresInvertColors
            accessible={false}
          />
        ) : null}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
            backgroundColor: withAlpha(c[tema.colorKey], 0.08),
            borderBottomWidth: 1,
            borderBottomColor: c.border,
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
          }}
        >
          <IconCircle iconName={tema.iconName} iconLib={tema.iconLib} colorKey={tema.colorKey} size={48} iconSize={22} />
          <Text style={{ flex: 1, fontSize: 18, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
            {tema.titulo}
          </Text>
        </View>

        <View style={{ padding: 16, gap: 14 }}>
          {bloques.length === 0 ? (
            <EmptyState iconName="file-text" titulo={t.consejoDetalle.contenidoPendiente} subtitulo={t.consejoDetalle.prontoAnadiremos} />
          ) : (
            bloques.map((b, idx) => <BloqueRender key={idx} bloque={b} />)
          )}
          <OrientativeBanner texto={t.consejoDetalle.orientativo} />
        </View>
      </ScrollView>
    </View>
  );
}

function BloqueRender({ bloque }: { bloque: BloqueContenido }) {
  const c = useColors();
  if (bloque.tipo === "subtitulo") {
    return (
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
          color: c.foreground,
          marginTop: 6,
          fontFamily: "Inter_700Bold",
        }}
      >
        {bloque.texto}
      </Text>
    );
  }
  if (bloque.tipo === "parrafo") {
    return (
      <Text style={{ fontSize: 14, color: c.foreground, lineHeight: 22, fontFamily: "Inter_400Regular" }}>
        {bloque.texto}
      </Text>
    );
  }
  if (bloque.tipo === "lista") {
    return (
      <View style={{ gap: 8 }}>
        {bloque.items.map((it, idx) => (
          <View key={idx} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
            <Feather name="check" size={16} color={c.olive} style={{ marginTop: 3 }} />
            <Text style={{ flex: 1, fontSize: 14, color: c.foreground, lineHeight: 20, fontFamily: "Inter_400Regular" }}>
              {it}
            </Text>
          </View>
        ))}
      </View>
    );
  }
  if (bloque.tipo === "enlace") {
    return (
      <Button
        title={bloque.texto}
        variant="outline"
        iconName="external-link"
        onPress={() => openExternal(bloque.url)}
      />
    );
  }
  return null;
}
