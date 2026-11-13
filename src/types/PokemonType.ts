export type Pokemon = {
	'name': string
	, 'url': string
	, 'sprites': {
		'front_default': string
		, 'back_default': string
	}
	, 'types': PokemonType[]
}


export type PokemonApi = {
	'results': Pokemon[]
	, 'count': number
}

export type PokemonType = {
	type: {
		'name': string,
		'url': string
	}
}