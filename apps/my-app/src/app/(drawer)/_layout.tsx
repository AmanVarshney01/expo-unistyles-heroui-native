import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable } from "react-native";
import { useCSSVariable } from "uniwind";

const DrawerLayout = () => {
	const foregroundColor = useCSSVariable("--color-foreground");
	const cardColor = useCSSVariable("--color-card");
	const primaryColor = useCSSVariable("--color-primary");
	const mutedForegroundColor = useCSSVariable("--color-muted-foreground");

	return (
		<Drawer
			screenOptions={{
				headerStyle: {
					backgroundColor: cardColor as string,
				},
				headerTintColor: foregroundColor as string,
				headerTitleStyle: {
					color: foregroundColor as string,
					fontWeight: "600",
				},
				drawerStyle: {
					backgroundColor: cardColor as string,
				},
				drawerActiveTintColor: primaryColor as string,
				drawerInactiveTintColor: mutedForegroundColor as string,
				drawerLabelStyle: {
					color: foregroundColor as string,
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
								<Ionicons name="add-outline" size={24} color={foregroundColor as string} />
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
