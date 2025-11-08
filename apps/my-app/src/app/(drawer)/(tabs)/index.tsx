import { Container } from "@/components/container";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
	return (
		<Container>
			<ScrollView>
				<View>
					<Text>Tab One</Text>
					<Text>Explore the first section of your app</Text>
				</View>
			</ScrollView>
		</Container>
	);
}

