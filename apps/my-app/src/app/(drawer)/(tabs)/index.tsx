import { Container } from "@/components/container";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from 'heroui-native';

export default function Home() {
	const primaryColor = useThemeColor('link');
	const infoColor = useThemeColor('success');

	return (
		<Container>
			<View className="flex-1 justify-center items-center">
				<Text className="text-3xl font-bold text-foreground">
					Tab One
				</Text>
			</View>
		</Container>
	);
};
