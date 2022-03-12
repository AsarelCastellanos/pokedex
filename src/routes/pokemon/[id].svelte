<script context="module">
    export async function load({fetch, params}) {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        const res = await fetch(url);
        const poke = await res.json();
        return {props: {poke}};
    }
</script>
<script>
    export let poke;
    const firstType = poke.types[0].type.name;
    const stats = poke.stats;
    console.log(stats)
</script>

<div class="flex flex-col items-center">
    <img class="pt-2 w-100 h-100" src={poke.sprites['front_default']} alt="{poke.name} is being displayed.">
    <h1 class="text-2xl text-center uppercase">{poke.name}</h1>
    <p>Types: <strong>{firstType}</strong> | Height: <strong>{poke.height}</strong> | Weight: <strong>{poke.weight}</strong></p>
</div>