import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
	return (
		<Drawer>
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
							<Ionicons name="add-outline" size={24} color="black" />
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
