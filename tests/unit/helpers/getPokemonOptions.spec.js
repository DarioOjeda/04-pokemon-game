import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

import { pokemonsMock } from '../mocks/pokemons.mock'

describe('getPokemonOptions helpers', () => {
    
    test('debe de regresar un arreglo de números', () => {
        
        const pokemons = getPokemons()

        expect( pokemons.length ).toBe(650)
        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)



    })


    test('Debe de retornar un arreglo de 4 elementos con los nombres de los pokemons', async() => {
        const pokemons = await getPokemonNames( [1, 2, 3, 4])


        // expect(JSON.stringify(pokemons[0])).toBe("{\"name\":\"bulbasaur\",\"id\":1}"),
        // expect(JSON.stringify(pokemons[1])).toBe("{\"name\":\"ivysaur\",\"id\":2}"),
        // expect(JSON.stringify(pokemons[2])).toBe("{\"name\":\"venusaur\",\"id\":3}"),
        // expect(JSON.stringify(pokemons[3])).toBe("{\"name\":\"charmander\",\"id\":4}")

        expect( pokemons ).toStrictEqual(pokemonsMock)

    })

    test('getPokemonOptions debe retornar un arreglo mezclado', async() => {

        const pokemons = await getPokemonOptions()


        expect(pokemons.length).toBe(4)
        expect(pokemons ).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
        ])
        // console.log(pokemons)
    })
})