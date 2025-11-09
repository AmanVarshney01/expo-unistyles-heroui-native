import { ScrollView, Text, View } from "react-native";
import { Container } from "@/components/container";
import { useQuery } from "convex/react";
import { api } from "@my-better-t-app/backend/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from 'heroui-native';

export default function Home() {
	const healthCheck = useQuery(api.healthCheck.get);
	const mutedForegroundColor = useThemeColor('surface-secondary');
	const successColor = useThemeColor('success');
	const destructiveColor = useThemeColor('destructive' as any);
	const primaryColor = useThemeColor('link');
	const accentColor = useThemeColor('link');

	const isConnected = healthCheck === "OK";
	const isLoading = healthCheck === undefined;

	return (
		<Container>
			<View className="mb-8">
				<Text className="text-4xl font-bold text-foreground mb-2">
					BETTER T STACK
				</Text>
				<Text className="text-muted-foreground text-base">
					Your app dashboard
				</Text>
			</View>
			<View className="card mb-6">
				<View className="flex-row items-center justify-between mb-4">
					<Text className="text-lg font-semibold text-foreground">
						System Status
					</Text>
					<View className={`status-badge ${isConnected ? "status-live" : "status-offline"}`}>
						<Text className="text-white font-semibold">
							{isConnected ? "LIVE" : "OFFLINE"}
						</Text>
					</View>
				</View>
				<View className="flex-row items-center mb-4">
					<View className={`w-3 h-3 rounded-full mr-3 ${isConnected ? "bg-success" : "bg-muted"}`} />
					<View className="flex-1">
						<Text className="text-foreground font-medium mb-1">
							Convex Backend
						</Text>
						<Text className="text-muted-foreground text-sm">
							{isLoading
								? "Checking connection..."
								: isConnected
									? "Connected to API"
									: "API Disconnected"}
						</Text>
					</View>
					{isLoading && (
						<Ionicons
							name="hourglass-outline"
							size={20}
							color={mutedForegroundColor}
						/>
					)}
					{!isLoading && isConnected && (
						<Ionicons
							name="checkmark-circle"
							size={20}
							color={successColor}
						/>
					)}
					{!isLoading && !isConnected && (
						<Ionicons
							name="close-circle"
							size={20}
							color={destructiveColor}
						/>
					)}
				</View>
			</View>
		</Container >
	);
}