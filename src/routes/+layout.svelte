<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import { dev } from '$app/environment';

	import SplashScreen from '$lib/components/sections/SplashScreen';
	import { DialogEntrypoint } from '$lib/components/ui/Dialog';
	import { ToastEntryPoint } from '$lib/components/ui/Toast';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<meta property="og:url" content="https://moiz.lu/" />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="リンク集 | moizlu" />
	<meta property="og:image" content="https://moiz.lu/ogp.png" />
	<meta property="og:site_name" content="リンク集 | moizlu" />
	<meta property="og:description" content="リンク集 | moizlu" />

	{#if typeof window !== 'undefined' && window.location.pathname !== '/'}
	    <meta name="robots" content="noindex" />
  	{/if}

	{#if dev}
		<title>[開発鯖]リンク集 | moizlu</title>
	{:else}
		<title>リンク集 | moizlu</title>
	{/if}
</svelte:head>

<SplashScreen />
<DialogEntrypoint />
<ToastEntryPoint />

<div class="w-full h-full">
	{@render children()}
</div>
