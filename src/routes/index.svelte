<script>
    import { fetchPokemon, pokemon } from "../stores/pokemart";
    import PokemonCard from "../components/pokemonCard.svelte";

    fetchPokemon(151,0);

    function loadFirstGen() {
        fetchPokemon(151, 0);
    }

    function loadSecondGen() {
        fetchPokemon(100, 151);
    }

    function loadedThirdGen() {
        fetchPokemon(135, 251);
    }

    function loadFourthGen() {
        fetchPokemon(107, 386)
    }

    function loadFifthGen() {
        fetchPokemon(156, 493)
    }

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        console.log(searchTerm);
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = [...$pokemon];
        }
    }
</script>

<div class="py-6 flex justify-center w-full">
    <button on:click={loadFirstGen} class="mx-4 text-lg">Gen 1</button>
    <button on:click={loadSecondGen} class="mx-4 text-lg">Gen 2</button>
    <button on:click={loadedThirdGen} class="mx-4 text-lg">Gen 3</button>
    <button on:click={loadFourthGen} class="mx-4 text-lg">Gen 4</button>
    <button on:click={loadFifthGen} class="mx-4 text-lg">Gen 5</button>
</div>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-grey-200" bind:value={searchTerm} type="text" placeholder="Search Pokemon">

<div class="py-4 grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as poke}
        <PokemonCard poke={poke}/>
    {/each}
</div>