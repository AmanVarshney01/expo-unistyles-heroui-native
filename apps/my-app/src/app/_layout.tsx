import "../global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export const unstable_settings = {
  initialRouteName: "(drawer)",
};

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL || "";
const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

export default function Layout() {
  const foregroundColor = useCSSVariable("--color-foreground");
  const cardColor = useCSSVariable("--color-card");

  return (
    <ConvexProvider client={convex}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardProvider>
          <HeroUINativeProvider>
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTintColor: foregroundColor as string,
                headerTitleStyle: {
                  color: foregroundColor as string,
                },
              }}
            >
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{
                  title: "Modal",
                  presentation: "modal",
                  headerStyle: {
                    backgroundColor: cardColor as string,
                  },
                }}
              />
            </Stack>
          </HeroUINativeProvider>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </ConvexProvider>
  );
}
