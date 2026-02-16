<script lang="ts">
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    import { toast } from "$lib/components/ui/Toast";
    import ShareButton from "$lib/components/ui/ShareButton";
    import Profile from "$lib/components/sections/Profile";
    import Links from "$lib/components/sections/Links";
    import { onMount } from "svelte";

    onMount(() => {
        const pathname = page.url.pathname;

        const onSplashHidden = () => {
            if (pathname === "/") { return; }
            setTimeout(() => {
                toast.push({ text: `${pathname}\nURLが見つかりません。`, displayTime: 10000 });
            }, 100);
        }

        document.addEventListener('splashHidden', onSplashHidden);

        goto('/', { replaceState: true, keepFocus: true, noScroll: true });

        return () => {
            document.removeEventListener('splashHidden', onSplashHidden);
        }
    });
</script>

<main class="w-full min-h-dvh h-full flex-center">
    <div class="w-full max-w-75 sm:max-w-150 relative flex-col-center">
        <ShareButton />
        <Profile />
        <Links />
    </div>
</main>
