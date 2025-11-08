import "../global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(drawer)",
};

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL || "", {
  unsavedChangesWarning: false,
});

export default function Layout() {
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
        }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ title: "Modal", presentation: "modal" }}
        />
      </Stack>
    </ConvexProvider>
  );
}
