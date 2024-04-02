<script>
	import {
    Avatar,
		DarkMode,
		NavBrand,
		NavHamburger,
		Navbar,
	} from 'flowbite-svelte';
	import '../../app.pcss';

	export let fluid = true;
	export let drawerHidden = false;
	export let list = false;

  const userAvatar = 'https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png';
</script>

<Navbar {fluid} class="text-black" color="default" let:NavContainer>
	<NavContainer class="mb-px mt-px px-1" {fluid}>
		<NavHamburger
			onClick={() => (drawerHidden = !drawerHidden)}
			class="m-0 me-3 md:block lg:hidden"
		/>
		<NavBrand href="/" class={list ? 'w-40' : 'lg:w-60'}>
			<img
				src="/images/burdaforward.png"
				class="me-2.5 h-8 sm:h-10"
				alt="Burdaforward Logo"
			/>
		</NavBrand>
		<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
			<DarkMode />
      <button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
        <Avatar size="sm" src={userAvatar} tabindex="0" />
      </button>
		</div>
	</NavContainer>
</Navbar>
