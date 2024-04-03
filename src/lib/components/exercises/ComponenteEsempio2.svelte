<script lang="ts">
    import {Button} from "flowbite-svelte";
    import {createEventDispatcher} from "svelte";

    export let count = 0;
    let inputValue=''
    const dispatch = createEventDispatcher();
    function increment(){
        count += 1
    }

    function prepareMessage(){
        dispatch('message', {
            text: inputValue
        });
    }
</script>

<p>Numero di click {count}</p>
<Button on:click={increment}>Incrementa</Button>
<div class="mt-1" >
    <input type="text" bind:value={inputValue}>
    <Button on:click={prepareMessage}>Send Message</Button>
</div>

