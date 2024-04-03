<script lang="ts">
    import {Button, Input} from "flowbite-svelte";
    let myName ='Giuseppe';
    $: {
        if(myName === 'Cleopatra'){
            alert('You are Cleopatra');
        }
    }

    function setName(name: string){
        myName = name;
    }
</script>

<p>My Name is {name}</p>

<div class="mt-1">
    <Button on:click={() => setName('Cleopatra')}>Send Cleopatra</Button>
</div>
<div class="mt-1">
    <Button on:click={() => setName('Nicola')}>Send Nicola</Button>
</div>
<div class="mt-5 w-[300px]">
    <p>Leggi/ scrivi il tuo nome:</p>
    <Input bind:value={myName}/>
</div>

