import { ScrollView, Text, View } from "react-native";
import { Container } from "@/components/container";
import { useQuery } from "convex/react";
import { api } from "@my-better-t-app/backend/convex/_generated/api";

export default function Home() {
	const healthCheck = useQuery(api.healthCheck.get);

	return (
		<Container>
			<ScrollView>
				<Text>BETTER T STACK</Text>

				<View>
					<View>
						<Text>System Status</Text>
						<View>
							<Text>LIVE</Text>
						</View>
					</View>
					<View>
						<View
						/>
						<View>
							<Text>Convex</Text>
							<Text>
								{healthCheck === undefined
									? "Checking connection..."
									: healthCheck === "OK"
										? "Connected to API"
										: "API Disconnected"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
}