<script lang="ts">
    import { m } from "$lib/paraglide/messages";

    import Header from "$lib/components/sections/Header";
    import Introduction from "$lib/components/sections/Introduction";
    import PrimaryLinks from "$lib/components/sections/PrimaryLinks";
    import SecondaryLinks from "$lib/components/sections/SecondaryLinks";
    import Footer from "$lib/components/sections/Footer";
</script>

<svelte:head>
    <title>{m.links()} | moizlu</title>
</svelte:head>

<main class="w-full h-full pt-15 px-4 min-h-dvh flex flex-col justify-center items-center
before:transition-all before:duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url(/images/room2.webp)] before:bg-cover before:bg-center before:brightness-170 dark:before:brightness-50 before:bg-fixed before:-z-1">
        <Header />

        <div class="p-4 w-full max-w-100 bg-base/70 rounded-xl border-label/20 border-2 flex flex-col justify-center items-center gap-5">
            <Introduction />
            <PrimaryLinks />
            <SecondaryLinks />
            <Footer />
        </div>
</main>
