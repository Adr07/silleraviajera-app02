import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Linking, ScrollView, Text, View } from "react-native";

import { DetailHeader } from "@/components/DetailHeader";
import { Button, Card, IconCircle, PageHeader } from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

type ColorKey = "terracotta" | "olive" | "mediterranean" | "amber";

function Section({
  iconName,
  colorKey,
  titulo,
  parrafos,
}: {
  iconName: string;
  colorKey: ColorKey;
  titulo: string;
  parrafos: string[];
}) {
  const c = useColors();
  return (
    <Card>
      <View style={{ padding: 16, gap: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <IconCircle iconName={iconName} iconLib="feather" colorKey={colorKey} size={40} iconSize={18} />
          <Text
            accessibilityRole="header"
            style={{ flex: 1, fontSize: 17, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
          >
            {titulo}
          </Text>
        </View>
        {parrafos.map((p, i) => (
          <Text
            key={i}
            style={{ fontSize: 15, color: c.foreground, lineHeight: 23, fontFamily: "Inter_400Regular" }}
          >
            {p}
          </Text>
        ))}
      </View>
    </Card>
  );
}

export default function LegalScreen() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);

  const openMail = () => {
    const url = "mailto:info@silleraviajera.com";
    Linking.openURL(url).catch(() => {
      WebBrowser.openBrowserAsync(url).catch(() => {});
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={t.legal.titulo} />
      <PageHeader
        titulo={t.legal.titulo}
        subtitulo={t.legal.subtitulo}
        iconName="shield"
        colorKey="mediterranean"
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 32 }}>
        <Section
          iconName="lock"
          colorKey="mediterranean"
          titulo={t.legal.privacidadTitulo}
          parrafos={t.legal.privacidadParrafos}
        />
        <Section
          iconName="alert-triangle"
          colorKey="amber"
          titulo={t.legal.avisoTitulo}
          parrafos={t.legal.avisoParrafos}
        />
        <Section
          iconName="user-check"
          colorKey="olive"
          titulo={t.legal.derechosTitulo}
          parrafos={t.legal.derechosParrafos}
        />
        <Card>
          <View style={{ padding: 16, gap: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <IconCircle iconName="mail" iconLib="feather" colorKey="terracotta" size={40} iconSize={18} />
              <Text
                accessibilityRole="header"
                style={{ flex: 1, fontSize: 17, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
              >
                {t.legal.contactoTitulo}
              </Text>
            </View>
            <Text style={{ fontSize: 15, color: c.foreground, lineHeight: 23, fontFamily: "Inter_400Regular" }}>
              {t.legal.contactoTexto}
            </Text>
            <Button
              title={t.legal.contactoBoton}
              onPress={openMail}
              iconName="mail"
              variant="secondary"
            />
          </View>
        </Card>
        <Text
          style={{
            fontSize: 12,
            color: c.mutedForeground,
            textAlign: "center",
            marginTop: 8,
            fontFamily: "Inter_400Regular",
          }}
        >
          {t.legal.ultimaActualizacion}
        </Text>
      </ScrollView>
    </View>
  );
}
