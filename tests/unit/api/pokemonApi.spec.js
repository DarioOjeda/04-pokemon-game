import pokemonApi from '@/api/pokemonApi'

// La única pruebaunitaria que podemos ahacer con axios
// porque confiamos ebn que la librería ya funciona bien
describe('pokemonApi', () => {
    test('Axios debe de estar configurado con el api de pokemon', () => {
        expect( pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})