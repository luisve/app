
import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import styled from "styled-components/native";

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
export type MenuProps = {
	name: string,
	href: Href,
	icon: MaterialIconName
};


export default function Index() {
	const datarutas: MenuProps[] = [
		/*
		{ name: "1-conversor", href: "/(1-conversor)" },
		{
			name: "teoria",
			href: "/(teoria)",
		},
		{
			name: "tabs",
			href: "/(tabs)",
		},
		*/
		{
			name: "Pokemones"
			, href: "/pokemon" as Href
			, icon: "catching-pokemon"
		},
		{
			name: "Apis",
			href: "/apis" as Href
			, icon: 'arrow-back-ios-new'
		},
	];

	const insets = useSafeAreaInsets();

	const renderItem = ({ item }: { item: MenuProps }) => {
		/*
		<MaterialIcons name="chevron-right" />
		*/
		return (
			<TouchableOpacity
				style={style.boxMenu}
				onPress={() => router.push(item.href)}>
				<MaterialIcons
					style={style.icono}
					name={item.icon}
					size={150}
					color="#666" />
				<Text style={style.boxMenuTexto}>{item.name}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View
			style={{
				flex: 1,
				/*width: '100%',*/
				backgroundColor: '#eee',
				/*paddingTop: insets.top,*/
				paddingBottom: insets.bottom,
			}}>
			<View style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }}>
				<StatusBar style="light" />
				<Text style={style.titulo}>MENU</Text>
					<FlatList
						keyExtractor={(item: MenuProps) => item.name}
						data={datarutas}
						renderItem={renderItem}
						numColumns={2}
						columnWrapperStyle={{ gap: 0 }}
					/>

			</View>

		</View>
	);
}
const style = StyleSheet.create({
	boxContenedor: {
		flexDirection: 'row'
		, flexWrap: 'wrap'
		, alignItems: 'center'
		, alignContent: 'center'
		, padding: 0
		, flex: 1
		/*		, padding: 10*/
		/*		, gap: 10*/
		,
	}
	, boxMenu: {
		width: '40%'
		, backgroundColor: '#4c7de746'
		, padding: 10
		, marginRight: '5%'
		, marginLeft: '5%'
		, minHeight: 200
		, flex: 1
		, aspectRatio: 1
		, alignItems: 'center'
		, justifyContent: 'center'
		, borderRadius: 12,
		/*
		width: '40%', margin: '10%', backgroundColor: '#fee', height: '200%', alignItems: 'center', borderRadius:30 
		*/
	}
	, icono: {
/*		width: '100%'*/
		 flex: 1
		, alignItems: 'center'
	}
	, boxMenuTexto: { fontSize: 20, }
	/*, nombre: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' }*/
	, titulo: { fontSize: 34, fontWeight: 'bold', textAlign: 'center' }
	,
})
/*
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;

`;
const Title = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

//estilos para el render item
const LinkButton = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  border: 2px solid #333;
  justify-content: space-between;
  width: 100%;
`;
const Name = styled.Text`
  color: #fff;
  font-size: 20px;
`;
const Arrow = styled(MaterialIcons)`
  color: #fff;
  font-size: 30px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
const List = styled(FlatList)`
  width: 100%;
  padding: 10px;
`; 
*/