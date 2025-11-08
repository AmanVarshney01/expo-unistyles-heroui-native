import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useUnistyles } from "react-native-unistyles";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
	initialRouteName: "(drawer)",
};

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL || "", {
	unsavedChangesWarning: false,
});

export default function RootLayout() {
	const { theme } = useUnistyles();

	return (
		<ConvexProvider client={convex}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Stack
					screenOptions={{
						headerStyle: {
							backgroundColor: theme.colors.background,
						},
						headerTitleStyle: {
							color: theme.colors.foreground,
						},
						headerTintColor: theme.colors.foreground,
					}}
				>
					<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
					<Stack.Screen
						name="modal"
						options={{ title: "Modal", presentation: "modal" }}
					/>
				</Stack>
			</GestureHandlerRootView>
		</ConvexProvider>
	);
}
