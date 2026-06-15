<script lang="ts">
    import avatar from "$lib/assets/icons/avatar.svg";
    import ShareIcon from "$lib/assets/icons/share.svelte";

    import { page } from '$app/state';
    import { resolve } from "$app/paths";
    import { getLocale } from "$lib/paraglide/runtime";
    // import { m } from "$lib/paraglide/messages";
    import { locales } from '$lib/paraglide/runtime';

    import SvgIcon from "$lib/components/ui/SvgIcon";
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";

	// import { page } from '$app/state';
	// import { getLocale, locales } from '$lib/paraglide/runtime';

	const DISPLAY_NAMES = {
		ja: '日本語',
		en: 'English'
	};

	const getLocalizedPath = (targetLocale: string) => {
		// page.url.pathname から現在のパス（例: /ja/about）を取得
		const currentPath = page.url.pathname;
		const currentLocale = getLocale();

		let cleanPath = currentPath as ((typeof currentPath) | "");
		if (currentPath.startsWith(`/${currentLocale}`)) {
			cleanPath = currentPath.slice(currentLocale.length + 1) as ((typeof currentPath) | "");
		}

		return `${(targetLocale === "ja") ? "" : `/${targetLocale}`  }${cleanPath === '' ? '/' : cleanPath}`;
	}

    const onShareClick = () => {
        if (navigator.share) {
            navigator.share({ title: "もいずる | moizlu", url: "https://moiz.lu" });
        } else {
            // eslint-disable-next-line svelte/no-navigation-without-resolve
            goto((getLocale() === "ja") ? "/share" : "/en/share");
        }
    }
</script>

<header>
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a title="Home" href={(getLocale() === "ja") ? "/" : "/en"}>
        <img src={avatar} alt="avatar" width={35} height={35}>
    </a>

    <div class="left-container">
        {#each locales as locale (locale)}
            {#if locale !== getLocale()}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a data-sveltekit-reload href={getLocalizedPath(locale)} hreflang={locale}>{DISPLAY_NAMES[locale] || locale}</a>
            {/if}
        {/each}

        {#if browser}
            <button title="share" onclick={onShareClick}>
                <SvgIcon Svg={ShareIcon} size={30} />
            </button>
        {:else}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a title="share" href={(getLocale() === "ja") ? "/share" : "/en/share"}><SvgIcon Svg={ShareIcon} size={30} /></a>
        {/if}
        <!-- <noscript>
            <a title="share" href={resolve("/share")}><SvgIcon Svg={ShareIcon} size={30} /></a>
        </noscript> -->
    </div>
</header>

<style>
    header {
        position: fixed;
        width: 100%;
        height: 50px;
        padding-inline: 5px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: white;
        background-color: var(--color-base);
        background-color: color-mix(in oklab, var(--color-base) 70%, transparent);
    }

    .left-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
</style>
