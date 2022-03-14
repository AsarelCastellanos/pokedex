<script>
    import { fetchPokemon, pokemon } from "../stores/pokemart";

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
</script>

<nav class="flex justify-center w-full">
    <button on:click={loadFirstGen} class="mx-4 text-lg">Gen 1</button>
    <button on:click={loadSecondGen} class="mx-4 text-lg">Gen 2</button>
    <button on:click={loadedThirdGen} class="mx-4 text-lg">Gen 3</button>
    <button on:click={loadFourthGen} class="mx-4 text-lg">Gen 4</button>
    <button on:click={loadFifthGen} class="mx-4 text-lg">Gen 5</button>
    <a class="mx-4 text-lg" href="/about">About</a>
</nav>