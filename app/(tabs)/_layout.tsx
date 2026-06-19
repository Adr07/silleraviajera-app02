import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";
import { useLang } from "@/contexts/LanguageContext";
import { useUi } from "@/i18n/ui";

function NativeTabLayout() {
  const { lang } = useLang();
  const t = useUi(lang);
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label>{t.tabs.inicio}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="guias">
        <Icon sf={{ default: "map", selected: "map.fill" }} />
        <Label>{t.tabs.guias}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="hoteles">
        <Icon sf={{ default: "bed.double", selected: "bed.double.fill" }} />
        <Label>{t.tabs.hoteles}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="viajes">
        <Icon sf={{ default: "airplane", selected: "airplane" }} />
        <Label>{t.tabs.viajes}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="mas">
        <Icon sf={{ default: "ellipsis", selected: "ellipsis" }} />
        <Label>{t.tabs.mas}</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";
  const { lang } = useLang();
  const t = useUi(lang);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Inter_600SemiBold", fontSize: 11 },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.background,
          borderTopWidth: isWeb ? 1 : 0,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView intensity={100} tint={isDark ? "dark" : "light"} style={StyleSheet.absoluteFill} />
          ) : isWeb ? (
            <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.background }]} />
          ) : null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t.tabs.inicio,
          tabBarIcon: ({ color }) => <Feather name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="guias"
        options={{
          title: t.tabs.guias,
          tabBarIcon: ({ color }) => <Feather name="map" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hoteles"
        options={{
          title: t.tabs.hoteles,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bed" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="viajes"
        options={{
          title: t.tabs.viajes,
          tabBarIcon: ({ color }) => <Feather name="navigation" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mas"
        options={{
          title: t.tabs.mas,
          tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
