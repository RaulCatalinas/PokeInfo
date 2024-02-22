const API_URL = "https://pokeapi.co/api/v2"

export const API_SEARCH_URLS = {
	pokemon: `${API_URL}/pokemon`,
	species: `${API_URL}/pokemon-species`,
	type: `${API_URL}/type`,
	ability: `${API_URL}/ability`
} as const
