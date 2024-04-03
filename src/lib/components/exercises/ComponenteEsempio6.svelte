<script lang="ts">


    import {count} from "$lib/components/exercises/state";
    import {Button} from "flowbite-svelte";
    import {onDestroy, onMount} from "svelte";
    onMount(
        () => {console.log('component init');
        }
    )

    onDestroy(() => console.log('component destroyed'))

    count.subscribe(res => console.log(`count value ${res}`))
    function increment() {
       count.update(u => u + 1);
    }

</script>
<div id="current-value">Current value: {$count}</div>

<Button on:click={increment}>bottone</Button>


