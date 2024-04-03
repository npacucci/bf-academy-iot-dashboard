<script lang="ts">
   import ComponenteEsempio1 from "$lib/components/exercises/ComponenteEsempio1.svelte";
   import ComponenteEsempio2 from "$lib/components/exercises/ComponenteEsempio2.svelte";
   import { Modal} from 'flowbite-svelte';
   import ComponenteEsempio3 from "$lib/components/exercises/ComponenteEsempio3.svelte";
   import ComponenteEsempio4 from "$lib/components/exercises/ComponenteEsempio4.svelte";
   import ComponenteEsempio5 from "$lib/components/exercises/ComponenteEsempio5.svelte";
   import ComponenteEsempio6 from "$lib/components/exercises/ComponenteEsempio6.svelte";
   let currentSelection = 1;
   let items=[1,2,3,4,5,6];
   let modalOpened = false;
   let textModal='aaa';

   function extractInfo(event:{detail:{text: string}}){
       modalOpened = true;
       textModal = event.detail.text;
   }
</script>
<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        {#each items as item}
            <li class="me-2" on:click={() => currentSelection = item}>
                <a class="border-b-2 active inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                   class:text-blue-600={currentSelection === item}
                   class:border-blue-600={currentSelection === item}
                   class:hover:text-gray-600={currentSelection !== item}
                   class:hover:border-gray-300={currentSelection !== item}
                >
                    Esercizio {item}
                </a>
            </li>
        {/each}
    </ul>
</div>
<div class="main-container">
    {#if currentSelection===1}
        <ComponenteEsempio1 ></ComponenteEsempio1>
        {:else if  currentSelection===2}
            <ComponenteEsempio2 on:message={extractInfo}></ComponenteEsempio2>
        {:else if currentSelection===3}
          <ComponenteEsempio3></ComponenteEsempio3>
    {:else if currentSelection===4}
        <ComponenteEsempio4></ComponenteEsempio4>
    {:else if currentSelection===5}
        <ComponenteEsempio5 ></ComponenteEsempio5>
    {:else if currentSelection===6}
        <ComponenteEsempio6></ComponenteEsempio6>
    {/if}
</div>

<Modal title="Modal example" bind:open={modalOpened} on:close={() => modalOpened = false}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        {textModal}
    </p>
</Modal>

<style lang="css">
    .main-container{
        padding: 30px 20px;
        height: 100vh;
    }
</style>

