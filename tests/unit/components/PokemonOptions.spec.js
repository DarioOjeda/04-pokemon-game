import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonsMock
      }
    });
  });

  test("debe hacer match con el snapshot", () => {
    console.log(wrapper.html());

    // expect(wrapper.html()).toMatchInlineSnapshot(`
    //   <div class="options-container" pokemonsmock="[object Object],[object Object],[object Object],[object Object]">
    //     <ul></ul>
    //   </div>
    // `);



    expect(wrapper.html()).toMatchSnapshot()
  });
});
