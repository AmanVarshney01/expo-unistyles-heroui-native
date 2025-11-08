import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCSSVariable } from "uniwind";

export default function TabLayout() {
	const foregroundColor = useCSSVariable("--color-foreground");
	const cardColor = useCSSVariable("--color-card");
	const primaryColor = useCSSVariable("--color-primary");
	const mutedForegroundColor = useCSSVariable("--color-muted-foreground");
	const borderColor = useCSSVariable("--color-border");

	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: cardColor as string,
				},
				headerTintColor: foregroundColor as string,
				headerTitleStyle: {
					color: foregroundColor as string,
					fontWeight: "600",
				},
				tabBarStyle: {
					backgroundColor: cardColor as string,
					borderTopColor: borderColor as string,
				},
				tabBarActiveTintColor: primaryColor as string,
				tabBarInactiveTintColor: mutedForegroundColor as string,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: "Explore",
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Ionicons name="compass" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
