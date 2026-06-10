<script lang="ts">
    import HomeIcon from "$lib/assets/icons/home.svelte";

    import { browser } from "$app/environment";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { resolve } from "$app/paths";
    import { getLocale } from "$lib/paraglide/runtime";
    import { m } from "$lib/paraglide/messages";

    import Header from "$lib/components/sections/Header";

    import { toast } from "$lib/components/ui/Toast";
    import SvgIcon from "$lib/components/ui/SvgIcon";

    const errorMessageJp: Record<number, string> = {
        404: "ページが見つかりませんでした。",
        500: "サーバー側でエラーが発生しました。"
    }

    if (browser) {
        const pathname = page.url.pathname;

        const onSplashHidden = () => {
            if (pathname === "/") { return; }
            setTimeout(() => {
                toast.push({ text: `${pathname}\nURLが見つかりません。`, displayTime: 10000 });
            }, 100);
        }

        if (page.status === 404) {
            goto(resolve('/'), { replaceState: true, keepFocus: true, noScroll: true });
        }

        document.addEventListener('splashHidden', onSplashHidden, { once: true });
    }
</script>

<noscript>
    <h1 class="font-extrabold text-9xl">{page.status}</h1>
    <h1 class="text-3xl md:text-5xl">{page.error?.message}</h1>
    <a href={resolve("/")}>ホームに戻る</a>
</noscript>

{#if page.status !== 404}
    <main class="w-full h-full flex flex-col justify-center items-center
    before:transition-all before:duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url(/images/room2.webp)] before:bg-cover before:bg-center before:brightness-170 dark:before:brightness-50 before:bg-fixed before:-z-1">
        <Header />
        <div class="p-5 flex flex-col justify-center items-center gap-0 md:gap-5 rounded-lg bg-base/70 backdrop-blur-sm">
            <h1 class="font-extrabold text-9xl">{page.status}</h1>
            <h1 class="text-3xl md:text-5xl">{page.error?.message}</h1>

            {#if getLocale() === "ja" && page.status in errorMessageJp}
                <p class="font-medium text-sm sm:text-lg md:text-3xl">{errorMessageJp[page.status]}</p>
            {/if}

            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a href="/" data-sveltekit-reload class="transition-all duration-300 mt-7 p-2 flex justify-center items-center gap-4 bg-label text-base rounded-sm shadow-black shadow-lg/100 hover:shadow-none">
                <SvgIcon Svg={HomeIcon} size={30} class="stroke-30 stroke-base fill-transparent" />
                <h3>{m.return_to_home()}</h3>
            </a>
        </div>
    </main>
{/if}
