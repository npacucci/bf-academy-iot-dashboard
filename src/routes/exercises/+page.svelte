<script lang="ts">
   import { Modal} from 'flowbite-svelte';
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

