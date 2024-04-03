<script lang="ts">
    let list = [1,2,3,4,5]


</script>

<div class="text-xl mt-5">EACH:</div>
<ul>
    {#each list as item}
        <li class:text-red-500={item % 2 === 0}>{item}
        </li>
    {/each}
</ul>

<div class="text-xl mt-5">IF/ELSE:</div>
{#if list.length > 10}
    <p>{list} is greater than 10</p>
{:else if 5 > list.length}
    <p>{list} is less than 5</p>
{:else}
    <p>{list.length} is between 5 and 10</p>
{/if}



