import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from 'heroui-native';

export default function TabLayout() {
	const themeColorForeground = useThemeColor('foreground');
	const themeColorBackground = useThemeColor('background');
	const themeColorLink = useThemeColor('link');
	const themeColorMuted = useThemeColor('surface-secondary');
	const themeColorBorder = useThemeColor('border');

	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: themeColorBackground,
				},
				headerTintColor: themeColorForeground,
				headerTitleStyle: {
					color: themeColorForeground,
					fontWeight: "600",
				},
				tabBarStyle: {
					backgroundColor: themeColorBackground,
					borderTopColor: themeColorBorder,
				},
				tabBarActiveTintColor: themeColorLink,
				tabBarInactiveTintColor: themeColorMuted,
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
