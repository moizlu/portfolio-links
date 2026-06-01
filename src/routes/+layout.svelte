<script lang="ts">
	// import type { Pathname } from '$app/types';
	// import { resolve } from '$app/paths';
	// import { page } from '$app/state';
	// import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { getLocale } from '$lib/paraglide/runtime';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import { theme } from '$lib/store/theme.svelte';
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	theme

	import ModalWindowEntrypoint from '$lib/components/ui/ModalWindow';
	import ToastEntryPoint from '$lib/components/ui/Toast/ToastEntryPoint.svelte';
	import SplashScreen from '$lib/components/sections/SplashScreen';

	let { children } = $props();

	$effect(() => {
		const lang = getLocale();
		document.documentElement.lang = lang
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<meta property="og:url" content="https://moiz.lu/" />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="リンク集(Links) | moizlu" />
	<meta property="og:image" content="https://moiz.lu/ogp.png" />
	<meta property="og:site_name" content="リンク集(Links) | moizlu" />
	<meta property="og:description" content="リンク集(Links) | moizlu" />

	{#if typeof window !== 'undefined' && window.location.pathname !== '/'}
		<meta name="robots" content="noindex" />
  	{/if}

	<meta http-equiv="content-security-policy" content="
		default-src 'self';
		script-src 'self' https://challenges.cloudflare.com https://static.cloudflareinsights.com 'unsafe-inline';
		style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
		font-src 'self' https://fonts.gstatic.com;
		frame-src 'self' https://challenges.cloudflare.com;
		img-src 'self' data: https:;
	">
</svelte:head>

<ModalWindowEntrypoint />
<ToastEntryPoint />
<SplashScreen />

{@render children()}

<!-- <div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
		>{locale}</a>
	{/each}
</div> -->
