<script lang="ts">
  import Widget from './Widget.svelte';
  import {
    Badge
  } from 'flowbite-svelte';

  export let value: string = '';
  export let title: string = '';
  export let subtitle: string = '';
  </script>
  
  <Widget {title} {subtitle}>
    <Badge slot="head" class="text-lg" color="dark" large>{value}</Badge>
  </Widget>
  