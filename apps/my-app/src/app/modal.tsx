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
			<ScrollView
				className="flex-1"
				contentContainerClassName="p-6"
			>
				<View className="mb-6">
					<Text className="text-3xl font-bold text-foreground mb-2">
						Modal
					</Text>
					<Text className="text-muted-foreground text-base">
						This is a modal screen
					</Text>
				</View>

				<View className="gap-4">
					<View className="card">
						<View className="flex-row items-center mb-3">
							<Ionicons
								name="information-circle"
								size={24}
								color={primaryColor}
								style={{ marginRight: 12 }}
							/>
							<Text className="text-foreground font-semibold text-lg">
								Modal Information
							</Text>
						</View>
						<Text className="text-muted-foreground">
							This modal can be used to display important information,
							forms, or any content that should be presented on top of
							the main navigation flow.
						</Text>
					</View>

					<TouchableOpacity
						onPress={() => router.back()}
						className="card bg-primary"
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
			</ScrollView>
		</Container>
	);
}