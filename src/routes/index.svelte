<!-- <script context="module">
    export async function load({fetch}) {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        const res = await fetch(url);
        const data = await res.json();
        const loadedPokemon = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
                }.png` 
            }
        });
        return {props: {pokemon:loadedPokemon}}
    }
</script> -->
<script>
    import { pokemon } from "../stores/pokemart";
    import PokemonCard from "../components/pokemonCard.svelte";

    // let searchTerm = "";
    // let filteredPokemon = [];

    // $: {
    //     console.log(searchTerm);
    //     if (searchTerm) {
    //         filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()));
    //     } else {
    //         filteredPokemon = [...pokemon];
    //     }
    // }
</script>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<!-- <input class="w-full rounded-md text-lg p-4 border-2 border-grey-200" bind:value={searchTerm} type="text" placeholder="Search Pokemon"> -->

<!-- <div class="py-4 grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as poke}
        <PokemonCard poke={poke}/>
    {/each}
</div> -->

{#each $pokemon as poke}
        <PokemonCard poke={poke}/>
{/each}