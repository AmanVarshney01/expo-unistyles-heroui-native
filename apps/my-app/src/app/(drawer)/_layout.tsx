import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useThemeColor } from 'heroui-native';
import { Platform, Pressable } from "react-native";
import { useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppTheme } from "@/contexts/app-theme-context";

const DrawerLayout = () => {
	const { isDark } = useAppTheme();
	const themeColorForeground = useThemeColor('foreground');
	const themeColorBackground = useThemeColor('background');
	const themeColorLink = useThemeColor('link');
	const themeColorSurfaceSecondary = useThemeColor('surface-secondary');

	const _renderThemeToggle = useCallback(() => <ThemeToggle />, []);

	return (
		<Drawer
			screenOptions={{
				headerTintColor: themeColorForeground,
				headerStyle: {
					backgroundColor: themeColorBackground,
				},
				headerTitleStyle: {
					fontWeight: '600',
					color: themeColorForeground,
				},
				headerRight: _renderThemeToggle,
				drawerStyle: {
					backgroundColor: themeColorBackground,
				},
				drawerActiveTintColor: themeColorLink,
				drawerInactiveTintColor: themeColorSurfaceSecondary,
				drawerLabelStyle: {
					color: themeColorForeground,
				},
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: "Home",
					drawerLabel: "Home",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="home-outline" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="(tabs)"
				options={{
					headerTitle: "Tabs",
					drawerLabel: "Tabs",
					drawerIcon: ({ size, color }) => (
						<MaterialIcons name="border-bottom" size={size} color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable className="mr-4">
								<Ionicons name="add-outline" size={24} color={themeColorForeground} />
							</Pressable>
						</Link>
					),
				}}
			/>
			<Drawer.Screen
				name="todos"
				options={{
					headerTitle: "Todos",
					drawerLabel: "Todos",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="checkbox-outline" size={size} color={color} />
					),
				}}
			/>
		</Drawer>
	);
};

export default DrawerLayout;
