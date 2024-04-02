<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	export let title: string = '';
	export let subtitle: string = '';
</script>

<Card size="xl" class="w-full max-w-none">
	<div class="mb-4 flex items-center justify-between">
		<div class="flex-shrink-0">
			<Heading tag="h3" class="text-2xl">{title}</Heading>
			<p class="text-base font-light text-gray-500 dark:text-gray-400">{subtitle}</p>
		</div>
    <slot name="head"></slot>
	</div>

  <slot></slot>
</Card>