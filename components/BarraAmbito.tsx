import React from "react";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import type { Ambito } from "@/data/types";

export function BarraAmbito({
  tab,
  onChange,
}: {
  tab: Ambito;
  onChange: (a: Ambito) => void;
}) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const items: { label: string; value: Ambito; icon: string }[] = [
    { label: t.hoteles.internacionales, value: "internacional", icon: "globe" },
    { label: t.hoteles.nacionales, value: "nacional", icon: "map-pin" },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: c.border,
        backgroundColor: c.card,
      }}
    >
      {items.map((it) => {
        const active = tab === it.value;
        return (
          <Pressable
            key={it.value}
            onPress={() => onChange(it.value)}
            style={({ pressed }) => [
              {
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                paddingHorizontal: 16,
                paddingVertical: 14,
                borderBottomWidth: 2,
                borderBottomColor: active ? c.primary : "transparent",
                marginBottom: -1,
              },
              pressed && { opacity: 0.8 },
            ]}
          >
            <Feather name={it.icon as any} size={16} color={active ? c.primary : c.mutedForeground} />
            <Text
              style={{
                color: active ? c.primary : c.mutedForeground,
                fontWeight: "600",
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {it.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
