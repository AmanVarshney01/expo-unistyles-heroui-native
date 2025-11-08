import "../global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { useThemeColor } from 'heroui-native';
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Platform, StyleSheet } from 'react-native';
import { AppThemeProvider } from "@/contexts/app-theme-context";
import { useAppTheme } from "@/contexts/app-theme-context";

export const unstable_settings = {
  initialRouteName: "(drawer)",
};

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL || "";
const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

function StackLayout() {
  const { isDark } = useAppTheme();
  const themeColorForeground = useThemeColor('foreground');
  const themeColorBackground = useThemeColor('background');

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerBlurEffect: isDark ? 'dark' : 'light',
        headerTintColor: themeColorForeground,
        headerStyle: {
          backgroundColor: Platform.select({
            ios: undefined,
            android: themeColorBackground,
          }),
        },
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerBackButtonDisplayMode: 'generic',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        contentStyle: {
          backgroundColor: themeColorBackground,
        },
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          title: "Modal",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

export default function Layout() {
  return (
    <ConvexProvider client={convex}>
      <GestureHandlerRootView style={styles.root}>
        <KeyboardProvider>
          <AppThemeProvider>
            <HeroUINativeProvider>
              <StackLayout />
            </HeroUINativeProvider>
          </AppThemeProvider>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
