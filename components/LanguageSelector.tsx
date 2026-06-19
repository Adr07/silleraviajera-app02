import React from "react";
import { Modal, Platform, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { useColors } from "@/hooks/useColors";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";
import { Card, IconCircle, withAlpha } from "./ui";

export function LanguageRow() {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  const [open, setOpen] = React.useState(false);

  const current = lang === "es" ? t.language.spanish : t.language.english;

  return (
    <>
      <Card onPress={() => setOpen(true)}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 14, padding: 16 }}>
          <IconCircle iconName="globe" iconLib="feather" colorKey="mediterranean" size={44} iconSize={20} />
          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 15, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
            >
              {t.language.title}
            </Text>
            <Text
              style={{ fontSize: 12, color: c.mutedForeground, marginTop: 2, fontFamily: "Inter_400Regular" }}
            >
              {current}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={c.mutedForeground} />
        </View>
      </Card>
      <LanguagePickerModal visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function LanguagePickerModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const c = useColors();
  const { lang, setLang } = useLang();
  const t = useUi(lang);

  const choose = (l: Lang) => {
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
    setLang(l);
    onClose();
  };

  const Option = ({ value, label }: { value: Lang; label: string }) => {
    const active = lang === value;
    return (
      <Pressable
        onPress={() => choose(value)}
        style={({ pressed }) => [
          {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 12,
            backgroundColor: active ? withAlpha(c.mediterranean, 0.1) : "transparent",
            borderWidth: 1,
            borderColor: active ? withAlpha(c.mediterranean, 0.3) : c.border,
          },
          pressed && { opacity: 0.85 },
        ]}
      >
        <Text style={{ flex: 1, fontSize: 16, color: c.foreground, fontFamily: "Inter_500Medium" }}>{label}</Text>
        {active ? <Feather name="check" size={20} color={c.mediterranean} /> : null}
      </Pressable>
    );
  };

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", padding: 24 }}
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={{ backgroundColor: c.card, borderRadius: 16, padding: 16, gap: 12 }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: c.foreground,
              fontFamily: "Inter_700Bold",
              marginBottom: 4,
            }}
          >
            {t.language.title}
          </Text>
          <Option value="es" label={t.language.spanish} />
          <Option value="en" label={t.language.english} />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
