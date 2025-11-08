import { ScrollView, Text, View } from "react-native";
import { Container } from "@/components/container";
import { useQuery } from "convex/react";
import { api } from "@my-better-t-app/backend/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useCSSVariable } from "uniwind";

export default function Home() {
	const healthCheck = useQuery(api.healthCheck.get);
	const mutedForegroundColor = useCSSVariable("--color-muted-foreground");
	const successColor = useCSSVariable("--color-success");
	const destructiveColor = useCSSVariable("--color-destructive");
	const primaryColor = useCSSVariable("--color-primary");
	const accentColor = useCSSVariable("--color-accent");

	const isConnected = healthCheck === "OK";
	const isLoading = healthCheck === undefined;

	return (
		<Container>
			<ScrollView className="flex-1" contentContainerClassName="p-6">
				{/* Header */}
				<View className="mb-8">
					<Text className="text-4xl font-bold text-foreground mb-2">
						BETTER T STACK
					</Text>
					<Text className="text-muted-foreground text-base">
						Your app dashboard
					</Text>
				</View>

				{/* System Status Card */}
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

					{/* Status Indicator */}
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
								color={mutedForegroundColor as string}
							/>
						)}
						{!isLoading && isConnected && (
							<Ionicons
								name="checkmark-circle"
								size={20}
								color={successColor as string}
							/>
						)}
						{!isLoading && !isConnected && (
							<Ionicons
								name="close-circle"
								size={20}
								color={destructiveColor as string}
							/>
						)}
					</View>
				</View>

				{/* Quick Actions */}
				<View className="mb-6">
					<Text className="text-lg font-semibold text-foreground mb-4">
						Quick Actions
					</Text>
					<View className="flex-row gap-3">
						<View className="flex-1 card">
							<Ionicons
								name="list-outline"
								size={24}
								color={primaryColor as string}
								style={{ marginBottom: 8 }}
							/>
							<Text className="text-foreground font-medium">
								Todos
							</Text>
							<Text className="text-muted-foreground text-xs mt-1">
								Manage tasks
							</Text>
						</View>
						<View className="flex-1 card">
							<Ionicons
								name="apps-outline"
								size={24}
								color={accentColor as string}
								style={{ marginBottom: 8 }}
							/>
							<Text className="text-foreground font-medium">
								Tabs
							</Text>
							<Text className="text-muted-foreground text-xs mt-1">
								Explore features
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}