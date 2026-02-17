<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import ArrowIcon from "$lib/assets/icons/arrow.svelte";

    import { browser } from "$app/environment";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    import { toast } from "$lib/components/ui/Toast";
    import SvgIcon from "$lib/components/ui/SvgIcon";

    if (browser) {
        const pathname = page.url.pathname;

        goto('/', { replaceState: true, keepFocus: true, noScroll: true });

        const onSplashHidden = () => {
            if (pathname === "/") { return; }
            setTimeout(() => {
                toast.push({ text: `${pathname}\nURLが見つかりません。`, displayTime: 10000 });
            }, 100);
        }

        if (page.status === 404) {
            goto('/', { replaceState: true, keepFocus: true, noScroll: true });
        }

        document.addEventListener('splashHidden', onSplashHidden, { once: true });
    }
</script>

{#if page.status !== 404}
    <main class="w-full h-dvh flex-col-center gap-2">
        <div class="z-100 opacity-50 md:opacity-100 fixed top-0 left-0 pointer-events-none">
            <a href="#home" title="logo">
                <img src={favicon} width={10} height={10} alt="logo" class="m-1 w-13 h-13 drop-shadow-black drop-shadow-md/100" />
            </a>
        </div>

        <h1>{page.status}</h1>
        {page.url.pathname}

        <a href="/" title="back to root" class="w-60 p-2 flex justify-start items-center rounded-full button-general">
            <SvgIcon Svg={ArrowIcon} size={30} class="rotate-270 text-label" />
            <p class="flex-1 text-center">トップページに戻る</p>
        </a>
    </main>
{/if}
