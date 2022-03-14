import { writable } from "svelte/store";

export const pokemon = writable([]);

export const fetchPokemon = async (limit, offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const rest = await fetch(url);
    const res = await rest.json();
    console.log(res);
    let index = offset;
    const loadedPokemon = res.results.map((data, index) => {
        return {
            name: data.name,
            id: index + offset,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        }
    });
    
    pokemon.set(loadedPokemon);
};