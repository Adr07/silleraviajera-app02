import React from "react";
import { Platform, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { useColors } from "@/hooks/useColors";
import { useFavorites, type FavoriteKind } from "@/contexts/FavoritesContext";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

export function FavoriteButton({
  kind,
  id,
  titulo,
  subtitulo,
  imagen,
  href,
  size = 22,
}: {
  kind: FavoriteKind;
  id: string;
  titulo: string;
  subtitulo?: string;
  imagen?: string | null;
  href?: string;
  size?: number;
}) {
  const c = useColors();
  const { isFavorite, toggle } = useFavorites();
  const { lang } = useLang();
  const t = useUi(lang);
  const fav = isFavorite(kind, id);
  return (
    <Pressable
      onPress={() => {
        if (Platform.OS !== "web") {
          Haptics.selectionAsync().catch(() => {});
        }
        toggle({ kind, id, titulo, subtitulo, imagen, href });
      }}
      hitSlop={10}
      style={({ pressed }) => [
        {
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: c.card,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: c.border,
        },
        pressed && { opacity: 0.7 },
      ]}
      accessibilityLabel={fav ? t.common.quitarFav : t.common.favorito}
    >
      <Feather name="heart" size={size - 4} color={fav ? c.terracotta : c.mutedForeground} />
    </Pressable>
  );
}
