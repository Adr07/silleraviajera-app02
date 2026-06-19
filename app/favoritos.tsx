import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { DetailHeader } from "@/components/DetailHeader";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { useFavorites, type Favorite } from "@/contexts/FavoritesContext";
import { destinosHotel, hotelesData } from "@/data/hoteles";
import { Badge, Card, EmptyState, PageHeader, withAlpha } from "@/components/ui";

export default function FavoritosScreen() {
  const c = useColors();
  const router = useRouter();
  const { lang } = useLang();
  const t = useUi(lang);
  const { favorites, remove } = useFavorites();

  const navegar = (f: Favorite) => {
    if (f.kind === "hotel") {
      const hotel = hotelesData.find((h) => h.id === f.id);
      if (!hotel) return;
      const destino = destinosHotel.find((d) => d.id === hotel.destinoId);
      router.push({
        pathname: "/hotel-ficha",
        params: { ambito: destino?.ambito ?? "internacional", destinoId: hotel.destinoId, hotelId: hotel.id },
      } as any);
    } else if (f.kind === "viaje") {
      router.push("/viajes" as any);
    }
  };

  const badgeFor = (kind: Favorite["kind"]) =>
    kind === "hotel" ? t.favoritos.badgeHotel : kind === "viaje" ? t.favoritos.badgeViaje : t.favoritos.badgeDestino;

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <DetailHeader title={t.stack.favoritos} />
      <PageHeader
        titulo={t.favoritos.titulo}
        subtitulo={t.favoritos.subtitulo}
        iconName="heart"
        colorKey="terracotta"
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 32 }}>
        {favorites.length === 0 ? (
          <EmptyState
            iconName="heart"
            titulo={t.favoritos.vacioTitulo}
            subtitulo={t.favoritos.vacioSubtitulo}
          />
        ) : (
          favorites.map((f) => (
            <Card key={`${f.kind}-${f.id}`} onPress={() => navegar(f)}>
              <View style={{ flexDirection: "row", padding: 12, gap: 12 }}>
                {f.imagen ? (
                  <Image source={{ uri: f.imagen }} style={{ width: 84, height: 64, borderRadius: 10 }} resizeMode="cover" />
                ) : (
                  <View
                    style={{
                      width: 84,
                      height: 64,
                      borderRadius: 10,
                      backgroundColor: withAlpha(c.muted, 0.6),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons name="bed" size={22} color={withAlpha(c.mutedForeground, 0.5)} />
                  </View>
                )}
                <View style={{ flex: 1, gap: 4 }}>
                  <Text numberOfLines={2} style={{ fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}>
                    {f.titulo}
                  </Text>
                  {f.subtitulo ? (
                    <Text style={{ fontSize: 12, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
                      {f.subtitulo}
                    </Text>
                  ) : null}
                  <Badge label={badgeFor(f.kind)} colorKey="mediterranean" />
                </View>
                <Pressable
                  onPress={() => remove(f.kind, f.id)}
                  hitSlop={10}
                  style={({ pressed }) => [
                    {
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: withAlpha(c.terracotta, 0.1),
                    },
                    pressed && { opacity: 0.7 },
                  ]}
                  accessibilityLabel={t.favoritos.quitar}
                >
                  <Feather name="x" size={16} color={c.terracotta} />
                </Pressable>
              </View>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
}
