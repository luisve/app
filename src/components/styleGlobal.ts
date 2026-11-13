
import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export const styleGlobal = () => {

	const insets = useSafeAreaInsets();
	const colores = Colors.light

	return StyleSheet.create({
		bodyGlobal: {
			flex: 1,
			width: '100%',
			backgroundColor: colores.background,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
		}
		, tituloPantalla: {
			color: colores.text,
			fontSize: 34,
			fontWeight: 'bold',
			textAlign: 'center'
		}
		, botonGlobal: {
			backgroundColor: '#007AFF',
			paddingVertical: 14,
			paddingHorizontal: 24,
			borderRadius: 8,
			alignItems: 'center',
		},
		textoBotonGlobal: {
			color: '#fff',
			fontSize: 16,
			fontWeight: '600',
		},
	});
}