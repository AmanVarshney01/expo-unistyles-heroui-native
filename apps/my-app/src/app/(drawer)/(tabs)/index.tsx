import { Container } from "@/components/container";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCSSVariable } from "uniwind";

export default function Home() {
	const primaryColor = useCSSVariable("--color-primary");
	const infoColor = useCSSVariable("--color-info");

	return (
		<Container>
			<ScrollView
				className="flex-1"
				contentContainerClassName="p-6"
			>
				<View className="mb-6">
					<Text className="text-3xl font-bold text-foreground mb-2">
						Tab One
					</Text>
					<Text className="text-muted-foreground text-base">
						Explore the first section of your app
					</Text>
				</View>

				<View className="gap-4">
					<View className="card">
						<View className="flex-row items-center mb-3">
							<Ionicons
								name="star-outline"
								size={24}
								color={primaryColor as string}
								style={{ marginRight: 12 }}
							/>
							<Text className="text-foreground font-semibold text-lg">
								Featured Content
							</Text>
						</View>
						<Text className="text-muted-foreground">
							This is your first tab. Add your content here to get started.
						</Text>
					</View>

					<View className="card">
						<View className="flex-row items-center mb-3">
							<Ionicons
								name="information-circle-outline"
								size={24}
								color={infoColor as string}
								style={{ marginRight: 12 }}
							/>
							<Text className="text-foreground font-semibold text-lg">
								Information
							</Text>
						</View>
						<Text className="text-muted-foreground">
							Use this space to display important information or features.
						</Text>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}

