<script lang="ts">
    import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";
    import {Button} from "flowbite-svelte";

    let currentValue = 1;
    onMount(
        () => {console.log('component init');
        }
    )

    onDestroy(() => console.log('component destroyed'))


    beforeUpdate(() => console.log('before:' + showCurrentDiv() ))
    afterUpdate(() => console.log('after:'+ showCurrentDiv()))



    function increment() {
        currentValue = currentValue + 1;
    }
    function showCurrentDiv(): string{
        return document.getElementById('current-value')?.innerText as string
    }
</script>
<div id="current-value">Current value: {currentValue}</div>

<Button on:click={increment}>bottone</Button>


