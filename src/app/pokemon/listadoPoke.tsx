import { pokeService } from "@/services/pokeService";
import { Pokemon } from "@/types/PokemonType";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const colores: Record<string, string> = {
	normal: 'rgba(168, 168, 120, 0.25)',
	fire: 'rgba(240, 128, 48, 0.25)',
	water: 'rgba(104, 144, 240, 0.25)',
	electric: 'rgba(248, 208, 48, 0.25)',
	grass: 'rgba(120, 200, 80, 0.25)',
	ice: 'rgba(152, 216, 216, 0.25)',
	fighting: 'rgba(192, 48, 40, 0.25)',
	poison: 'rgba(160, 64, 160, 0.25)',
	ground: 'rgba(224, 192, 104, 0.25)',
	flying: 'rgba(168, 144, 240, 0.25)',
	psychic: 'rgba(248, 88, 136, 0.25)',
	bug: 'rgba(168, 184, 32, 0.25)',
	rock: 'rgba(184, 160, 56, 0.25)',
	ghost: 'rgba(112, 88, 152, 0.25)',
	dragon: 'rgba(112, 56, 248, 0.25)',
	dark: 'rgba(112, 88, 72, 0.25)',
	steel: 'rgba(184, 184, 208, 0.25)',
	fairy: 'rgba(238, 153, 172, 0.25)',
}


export default function ListadoPoke() {


	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const { height, width } = useWindowDimensions();
	const insets = useSafeAreaInsets();

	useEffect(() => {
		// fetch pokemons
		pokeService.getListaConImagenes()
			.then((lista) => {
				setPokemons(lista);
				console.log(lista);
			})
	}, []);


	return (
		<View
			style={{
				flex: 1,
				width: '100%',
				backgroundColor: '#eee',
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
			}}>
			<Text style={style.titulo}>Listado de Pokemones</Text>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					gap: 10,
					width: '90%',
					marginLeft: '5%',
				}}>
				{
					pokemons && pokemons.length > 0 &&
					pokemons.map((pokemon, index) => (
						<View
							key={index}
							style={{

								backgroundColor: colores[pokemon.types[0].type.name],
								borderColor: '#000',
								borderWidth: 1,
								borderRadius: 10
							}}>
							<Text style={style.nombre}>{pokemon.name}</Text>
							<View
								style={{ flexDirection: 'row', justifyContent: 'center', }}	>
								<Image
									source={{ uri: pokemon.sprites.front_default }}
									style={{ height: 150, width: 150 }}
								/>
								<Image
									source={{ uri: pokemon.sprites.back_default }}
									style={{ height: 150, width: 150, }}
								/>
							</View>
						</View>
					))
				}
			</ScrollView>
		</View>
	)
}

const style = StyleSheet.create({
	nombre: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' }
	, titulo: { fontSize: 34, fontWeight: 'bold', textAlign: 'center' }
})

/*
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<Text>PokeDex</Text>
		</View>

*/






/*
import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
	 return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
	 return (
		<ThemedText type="small">
		  shake device or press <ThemedText type="code">m</ThemedText> in terminal
		</ThemedText>
	 );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
	 <ThemedText type="small">
		press <ThemedText type="code">{shortcut}</ThemedText>
	 </ThemedText>
  );
}

export default function HomeScreen() {
  return (
	 <ThemedView style={styles.container}>
		<SafeAreaView style={styles.safeArea}>
		  <ThemedView style={styles.heroSection}>
			 <AnimatedIcon />
			 <ThemedText type="title" style={styles.title}>
				Welcome to&nbsp;Expo
			 </ThemedText>
		  </ThemedView>

		  <ThemedText type="code" style={styles.code}>
			 get started
		  </ThemedText>

		  <ThemedView type="backgroundElement" style={styles.stepContainer}>
			 <HintRow
				title="Try editing"
				hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
			 />
			 <HintRow title="Dev tools" hint={getDevMenuHint()} />
			 <HintRow
				title="Fresh start"
				hint={<ThemedText type="code">npm run reset-project</ThemedText>}
			 />
		  </ThemedView>

		  {Platform.OS === 'web' && <WebBadge />}
		</SafeAreaView>
	 </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
	 flex: 1,
	 justifyContent: 'center',
	 flexDirection: 'row',
  },
  safeArea: {
	 flex: 1,
	 paddingHorizontal: Spacing.four,
	 alignItems: 'center',
	 gap: Spacing.three,
	 paddingBottom: BottomTabInset + Spacing.three,
	 maxWidth: MaxContentWidth,
  },
  heroSection: {
	 alignItems: 'center',
	 justifyContent: 'center',
	 flex: 1,
	 paddingHorizontal: Spacing.four,
	 gap: Spacing.four,
  },
  title: {
	 textAlign: 'center',
  },
  code: {
	 textTransform: 'uppercase',
  },
  stepContainer: {
	 gap: Spacing.three,
	 alignSelf: 'stretch',
	 paddingHorizontal: Spacing.three,
	 paddingVertical: Spacing.four,
	 borderRadius: Spacing.four,
  },
});
*/