import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { openExternal } from "@/utils/links";
import { withAlpha } from "@/components/ui";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

export function YouTubeEmbed({
  videoId,
  videoUrl,
  title,
}: {
  videoId: string | null | undefined;
  videoUrl?: string | null;
  title: string;
}) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const url = videoUrl ?? (videoId ? `https://www.youtube.com/watch?v=${videoId}` : null);

  if (!videoId) {
    return (
      <View
        style={{
          aspectRatio: 16 / 9,
          backgroundColor: withAlpha(c.muted, 0.4),
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        <MaterialCommunityIcons name="youtube" size={32} color={withAlpha(c.mutedForeground, 0.4)} />
        <Text style={{ marginTop: 8, fontWeight: "600", color: c.foreground, fontFamily: "Inter_600SemiBold" }}>
          {t.common.proximamenteVideo}
        </Text>
        <Text style={{ marginTop: 4, fontSize: 12, color: c.mutedForeground, textAlign: "center", fontFamily: "Inter_400Regular" }}>
          {t.common.proximamenteVideoSub}
        </Text>
      </View>
    );
  }

  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <View style={{ borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: c.border }}>
      <Pressable
        onPress={() => url && openExternal(url)}
        style={({ pressed }) => [
          { aspectRatio: 16 / 9, backgroundColor: "#000" },
          pressed && { opacity: 0.9 },
        ]}
      >
        <Image source={{ uri: thumb }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "rgba(0,0,0,0.6)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="play" size={26} color="#fff" />
          </View>
        </View>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 12,
          backgroundColor: c.card,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6, flex: 1 }}>
          <Feather name="play" size={14} color={c.mutedForeground} />
          <Text style={{ fontSize: 12, color: c.mutedForeground, flex: 1, fontFamily: "Inter_400Regular" }} numberOfLines={1}>
            {title}
          </Text>
        </View>
        {url ? (
          <Pressable onPress={() => openExternal(url)} style={({ pressed }) => [pressed && { opacity: 0.7 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <MaterialCommunityIcons name="youtube" size={14} color={c.primary} />
              <Text style={{ fontSize: 12, color: c.primary, fontWeight: "600", fontFamily: "Inter_600SemiBold" }}>
                {t.common.verEnYoutube}
              </Text>
            </View>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
