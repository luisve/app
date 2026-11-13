import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				title:''
				, headerLeft: () => (
					<Pressable onPress={() => router.back()}>
						<Text style={{ color: '#007AFF', fontSize: 26 }}>Volver</Text>
					</Pressable>
				)
			}}>
		</Stack>
	);
}