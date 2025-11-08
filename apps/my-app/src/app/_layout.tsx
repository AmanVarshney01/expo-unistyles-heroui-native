import "../global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Slot } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL || "", {
  unsavedChangesWarning: false,
});

export default function Layout() {
  return (
    <ConvexProvider client={convex}>
      <Slot />
    </ConvexProvider >
  )
}
