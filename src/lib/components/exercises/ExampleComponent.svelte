<script lang="ts">
    import {Button} from "flowbite-svelte";

    let myName = 'Giuseppe';
    let count = 0;
    let colors = ["red" ,"yellow" ,"green" , "purple" , "blue" , "light" , "dark"];
    let currentColor= 'red';
    function increment(){
        count = count + 1;
    }

    function changeColor(color: string) {
        currentColor = color;
    }

</script>

<div class="mt-2">
    <div class="font-bold ">Esercizio 1 Attributi:</div>
    <p class="my-hello-world-class">Hello World {myName}</p>
</div>

<div class="mt-2">
    <div class="font-bold ">Esercizio 2 Eventi:</div>
    <p class="my-hello-world-class">Number of clicks {count}</p>
    <div class="mt-2">
        <Button  on:click={increment}>Click Me</Button>
    </div>
</div>

<div class="mt-2">
    <div class="font-bold ">Esercizio 3 Condizioni logiche:</div>
    {#if (count === 1 && count > 0)}
      <p>Una Volta</p>
        {:else}
        <p>{count} Volte</p>
    {/if}
</div>

<div class="mt-2">
    <div class="font-bold ">Esercizio 4 Condizioni logiche FOR:</div>

    {#each colors as color}
        <Button color="{color}" on:click={() => changeColor(color)}>{color}</Button>
    {/each}

    <div>Colore selezionato: {currentColor}</div>

</div>

<style lang="css">
    .my-hello-world-class{
        color: green;
        font-style: italic;
        font-size: 16px;
    }
</style>
