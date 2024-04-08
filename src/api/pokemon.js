/**
 * Obtiene una lista de pokémons desde la API.
 * @returns {Promise<Array>} Una promesa que se resuelve con una lista de pokémons.
 * @throws {Error} Si hay un error al obtener los datos de la API.
 */
export async function getPokemonsApi() {
    try {
        // Construye la URL de la API para obtener los pokémons
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        
        // Realiza una solicitud GET a la URL y espera la respuesta
        const response = await fetch(url);
        
        // Convierte la respuesta en formato JSON y espera el resultado
        const result = await response.json();
        
        // Devuelve los datos obtenidos de la API
        return result;
    } catch (error) {
        // Captura cualquier error que ocurra durante el proceso y lo lanza
        throw error;
    }
}
