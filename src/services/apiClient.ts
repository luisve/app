import axios from 'axios';


export const apiClient = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Interceptor para agregar token automáticamente
apiClient.interceptors.request.use((config) => {
	const token = ''; // aquí obtienes el token (AsyncStorage, contexto, etc.)
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});