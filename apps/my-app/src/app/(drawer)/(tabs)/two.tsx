import { Container } from "@/components/container";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCSSVariable } from "uniwind";

export default function TabTwo() {
	const accentColor = useCSSVariable("--color-accent");
	const warningColor = useCSSVariable("--color-warning");

	return (
		<Container>
			<ScrollView
				className="flex-1"
				contentContainerClassName="p-6"
			>
				<View className="mb-6">
					<Text className="text-3xl font-bold text-foreground mb-2">
						Tab Two
					</Text>
					<Text className="text-muted-foreground text-base">
						Discover more features and content
					</Text>
				</View>

				<View className="gap-4">
					<View className="card">
						<View className="flex-row items-center mb-3">
							<Ionicons
								name="compass-outline"
								size={24}
								color={accentColor as string}
								style={{ marginRight: 12 }}
							/>
							<Text className="text-foreground font-semibold text-lg">
								Explore
							</Text>
						</View>
						<Text className="text-muted-foreground">
							This is your second tab. Use it to explore additional features.
						</Text>
					</View>

					<View className="card">
						<View className="flex-row items-center mb-3">
							<Ionicons
								name="settings-outline"
								size={24}
								color={warningColor as string}
								style={{ marginRight: 12 }}
							/>
							<Text className="text-foreground font-semibold text-lg">
								Settings
							</Text>
						</View>
						<Text className="text-muted-foreground">
							Customize your experience and manage your preferences here.
						</Text>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}

