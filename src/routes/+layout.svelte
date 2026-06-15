<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { locales, localizeHref } from '$lib/paraglide/runtime';

	import "./layout.css";
	import favicon from '$lib/assets/favicon.svg';
	
	import Header from '$lib/components/sections/Header';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) { return; }

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();	
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/destyle.css@3.0.2/destyle.css"
	/>

	<meta property="og:url" content="https://moiz.lu/" />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="リンク集(Links) | moizlu" />
	<meta property="og:image" content="https://moiz.lu/ogp.png" />
	<meta property="og:site_name" content="リンク集(Links) | moizlu" />
	<meta property="og:description" content="リンク集(Links) | moizlu" />

	<title>{m.links()} | moizlu</title>

	{#if typeof window !== 'undefined' && window.location.pathname !== '/'}
		<meta name="robots" content="noindex" />
  	{/if}

	<meta http-equiv="content-security-policy" content="
		default-src 'self';
		connect-src 'self' https://cloudflareinsights.com;
		script-src 'self' https://challenges.cloudflare.com https://static.cloudflareinsights.com 'unsafe-inline';
		style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
		font-src 'self' https://fonts.gstatic.com;
		frame-src 'self' https://challenges.cloudflare.com;
		img-src 'self' data: https:;
	">
</svelte:head>

<Header />
<div class="container">{@render children()}</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
		>{locale}</a>
	{/each}
</div>

<!-- <nav aria-label="Languages" style="display: hidden;">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)} data-sveltekit-reload>
			{locale}
		</a>
	{/each}
</nav> -->

<style>
	.container {
		width: 100%;
		height: 100%;
		min-height: 100dvh;
		color: var(--color-label);
		font-family: "Noto Sans JP", "monospace";

		/* padding-top: 50px; */
	}

	.container::before {
		content: "";
		z-index: -2;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--color-base);
		background-image: url("/images/room-light.webp");
		background-size: cover;
		background-position: center;
		/* filter: brightness(100%); */
	}

	.container::after {
		content: "";
		z-index: -1;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--color-base);
		opacity: 70%;
	}
</style>
