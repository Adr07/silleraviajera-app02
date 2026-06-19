import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

type ColorKey = "terracotta" | "olive" | "mediterranean" | "amber";

export const MIN_TOUCH = 44;

export function withAlpha(hex: string, alpha: number): string {
  const a = Math.round(alpha * 255).toString(16).padStart(2, "0");
  return `${hex}${a}`;
}

export function IconCircle({
  size = 40,
  iconSize = 20,
  iconLib = "feather",
  iconName,
  colorKey = "mediterranean",
  bg,
  fg,
}: {
  size?: number;
  iconSize?: number;
  iconLib?: "feather" | "mci";
  iconName: string;
  colorKey?: ColorKey;
  bg?: string;
  fg?: string;
}) {
  const c = useColors();
  const color = fg ?? c[colorKey];
  const background = bg ?? withAlpha(c[colorKey], 0.15);
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{
        width: size,
        height: size,
        borderRadius: size / 3,
        backgroundColor: background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconLib === "mci" ? (
        <MaterialCommunityIcons name={iconName as any} size={iconSize} color={color} />
      ) : (
        <Feather name={iconName as any} size={iconSize} color={color} />
      )}
    </View>
  );
}

export function PageHeader({
  titulo,
  subtitulo,
  iconName,
  iconLib = "feather",
  colorKey = "terracotta",
}: {
  titulo: string;
  subtitulo?: string;
  iconName: string;
  iconLib?: "feather" | "mci";
  colorKey?: ColorKey;
}) {
  const c = useColors();
  return (
    <View
      style={{
        backgroundColor: withAlpha(c[colorKey], 0.08),
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: c.border,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: subtitulo ? 8 : 0 }}>
        <IconCircle iconName={iconName} iconLib={iconLib} colorKey={colorKey} />
        <Text
          accessibilityRole="header"
          style={{ flex: 1, fontSize: 24, fontWeight: "700", color: c.foreground, fontFamily: "Inter_700Bold" }}
        >
          {titulo}
        </Text>
      </View>
      {subtitulo ? (
        <Text style={{ fontSize: 14, color: c.mutedForeground, lineHeight: 21, fontFamily: "Inter_400Regular" }}>
          {subtitulo}
        </Text>
      ) : null}
    </View>
  );
}

export function Card({
  children,
  style,
  onPress,
  accessibilityLabel,
  accessibilityHint,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}) {
  const c = useColors();
  const base: ViewStyle = {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.card,
    overflow: "hidden",
  };
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        style={({ pressed }) => [base, { minHeight: 44 }, style, pressed && { opacity: 0.85 }]}
      >
        {children}
      </Pressable>
    );
  }
  return <View style={[base, style]}>{children}</View>;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  iconName,
  iconLib = "feather",
  style,
  disabled,
}: {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "outline" | "ghost" | "secondary";
  iconName?: string;
  iconLib?: "feather" | "mci";
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}) {
  const c = useColors();

  const styles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    minHeight: 44,
  };
  let bg = c.primary;
  let fg = c.primaryForeground;
  let borderWidth = 0;
  let borderColor = "transparent";
  if (variant === "outline") {
    bg = "transparent";
    fg = c.foreground;
    borderWidth = 1;
    borderColor = c.border;
  } else if (variant === "ghost") {
    bg = "transparent";
    fg = c.foreground;
  } else if (variant === "secondary") {
    bg = c.mediterranean;
    fg = "#ffffff";
  }

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: !!disabled }}
      style={({ pressed }) => [
        styles,
        { backgroundColor: bg, borderWidth, borderColor, opacity: disabled ? 0.5 : pressed ? 0.85 : 1 },
        style,
      ]}
    >
      {iconName ? (
        iconLib === "mci" ? (
          <MaterialCommunityIcons name={iconName as any} size={16} color={fg} accessibilityElementsHidden importantForAccessibility="no" />
        ) : (
          <Feather name={iconName as any} size={16} color={fg} accessibilityElementsHidden importantForAccessibility="no" />
        )
      ) : null}
      <Text style={{ color: fg, fontSize: 15, fontWeight: "600", fontFamily: "Inter_600SemiBold" }}>{title}</Text>
    </Pressable>
  );
}

export function Badge({
  label,
  colorKey = "terracotta",
  style,
}: {
  label: string;
  colorKey?: ColorKey;
  style?: StyleProp<ViewStyle>;
}) {
  const c = useColors();
  const textKey = `${colorKey}Text` as const;
  const textColor = (c as unknown as Record<string, string>)[textKey] ?? c[colorKey];
  return (
    <View
      style={[
        {
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 999,
          backgroundColor: withAlpha(c[colorKey], 0.12),
          borderWidth: 1,
          borderColor: withAlpha(c[colorKey], 0.4),
          alignSelf: "flex-start",
        },
        style,
      ]}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: textColor,
          fontFamily: "Inter_600SemiBold",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export function Estrellas({ n }: { n: number }) {
  const c = useColors();
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${n} / 5`}
      style={{ flexDirection: "row", gap: 2 }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Feather
          key={i}
          name="star"
          size={12}
          color={i < n ? "#f59e0b" : withAlpha(c.mutedForeground, 0.3)}
        />
      ))}
    </View>
  );
}

export function SectionLabel({ label, color }: { label: string; color?: string }) {
  const c = useColors();
  return (
    <Text
      style={{
        fontSize: 11,
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        color: color ?? c.mutedForeground,
        fontFamily: "Inter_600SemiBold",
      }}
    >
      {label}
    </Text>
  );
}

export function OrientativeBanner({ texto, titulo }: { texto: string; titulo?: string }) {
  const c = useColors();
  const { lang } = useLang();
  const t = useUi(lang);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: withAlpha(c.amber, 0.4),
        backgroundColor: withAlpha(c.amber, 0.08),
      }}
    >
      <IconCircle iconName="info" colorKey="amber" size={36} iconSize={16} />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "600",
            color: c.foreground,
            marginBottom: 4,
            fontFamily: "Inter_600SemiBold",
          }}
        >
          {titulo ?? t.common.informacionOrientativa}
        </Text>
        <Text style={{ fontSize: 13, lineHeight: 20, color: c.mutedForeground, fontFamily: "Inter_400Regular" }}>
          {texto}
        </Text>
      </View>
    </View>
  );
}

export function EmptyState({
  iconName,
  iconLib = "feather",
  titulo,
  subtitulo,
}: {
  iconName: string;
  iconLib?: "feather" | "mci";
  titulo: string;
  subtitulo?: string;
}) {
  const c = useColors();
  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: c.border,
        backgroundColor: withAlpha(c.muted, 0.4),
      }}
    >
      {iconLib === "mci" ? (
        <MaterialCommunityIcons name={iconName as any} size={32} color={withAlpha(c.mutedForeground, 0.4)} />
      ) : (
        <Feather name={iconName as any} size={32} color={withAlpha(c.mutedForeground, 0.4)} />
      )}
      <Text style={{ marginTop: 8, fontWeight: "600", color: c.foreground, fontFamily: "Inter_600SemiBold" }}>
        {titulo}
      </Text>
      {subtitulo ? (
        <Text style={{ marginTop: 4, fontSize: 13, color: c.mutedForeground, textAlign: "center", fontFamily: "Inter_400Regular" }}>
          {subtitulo}
        </Text>
      ) : null}
    </View>
  );
}

export function PressableRow({
  children,
  onPress,
  style,
  ...rest
}: PressableProps & { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  return (
    <Pressable
      onPress={onPress}
      {...rest}
      style={({ pressed }) => [pressed && { opacity: 0.85 }, style as ViewStyle]}
    >
      {children}
    </Pressable>
  );
}

export function MonoText({ children, style }: { children: React.ReactNode; style?: StyleProp<TextStyle> }) {
  const c = useColors();
  return (
    <Text style={[{ color: c.foreground, fontFamily: "Inter_400Regular" }, style]}>{children}</Text>
  );
}

export const sharedStyles = StyleSheet.create({
  container: { flex: 1 },
  contentPad: { padding: 16, gap: 16 },
});
