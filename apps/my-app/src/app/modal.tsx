import { Container } from "@/components/container";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCSSVariable } from "uniwind";

export default function Modal() {
	const primaryColor = useCSSVariable("--color-primary") as string;
	const primaryForegroundColor = useCSSVariable("--color-primary-foreground") as string;

	return (
		<Container>
			<View
				className="flex-1 justify-center items-center"
			>
				<View className="gap-4">
					<TouchableOpacity
						onPress={() => router.back()}
						className="bg-primary p-4 rounded-lg"
					>
						<View className="flex-row items-center justify-center">
							<Text className="text-primary-foreground font-semibold text-lg mr-2">
								Close Modal
							</Text>
							<Ionicons
								name="close-circle"
								size={24}
								color={primaryForegroundColor}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}