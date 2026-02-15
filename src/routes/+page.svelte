<script lang="ts">
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    import { toast } from "$lib/components/ui/Toast";
    import ShareButton from "$lib/components/ui/ShareButton";
    import Profile from "$lib/components/sections/Profile";
    import Links from "$lib/components/sections/Links";

    if (browser) {
        if (page.url.pathname !== "/") {
            toast.push({ text: `${page.url.pathname}\nURLが見つかりません。` });
        }
        goto('/', { replaceState: true, keepFocus: true, noScroll: true });
    }
</script>

<main class="w-full min-h-dvh h-full flex-center">
    <div class="w-full max-w-75 sm:max-w-150 relative flex-col-center">
        <ShareButton />
        <Profile />
        <Links />
    </div>
</main>
