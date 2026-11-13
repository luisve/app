// src/services/productService.ts
import { Pokemon, PokemonApi } from '@/types/PokemonType';
import { apiClient } from './apiClient';

export interface Product {
	id: number;
	name: string;
	price: number;
}

export const pokeService = {

	getDatos: async (nombre: string): Promise<any> => {
		const { data } = await apiClient.get<Pokemon>('/pokemon/' + nombre);
		return {
			'sprites': { 'front_default': data.sprites.front_default, 'back_default': data.sprites.back_default }
			, 'types': data.types
		};
	},

	// await userService.getAll();
	getListaConImagenes: async (): Promise<Pokemon[]> => {
		const { data } = await apiClient.get<PokemonApi>('/pokemon?limit=20');
		//return data.results;

		const conImagenes = await Promise.all(
			data.results.map(async (d) => ({
				...d,
				... await pokeService.getDatos(d.name)
			}))
		);
		console.log(conImagenes)
		return conImagenes;

	},


	getAll: async (): Promise<PokemonApi> => {
		const { data } = await apiClient.get<PokemonApi>('/pokemon?limit=20');
		return data;
	},

	search: async (query: string): Promise<Product[]> => {
		const { data } = await apiClient.get<Product[]>('/products/search', {
			params: { q: query },
		});
		return data;
	},
};