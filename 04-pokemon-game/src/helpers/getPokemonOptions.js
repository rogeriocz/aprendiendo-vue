import pokemonApi from "@/api/pokemonApi";


// TODO: crear un array de 650 espacios vacios y agregarle un indice
const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
};
// TODO: el array de getpokemons desordenarlos
const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
  
  return pokemons
};
// TODO: Genera los nombre de los pokemons pero solo devolviendo 4 datos en array
const getPokemonNames = async( [a,b,c,d] = [] ) => {
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name)

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getPokemonOptions;
