<script lang="ts">
    import LoadingIcon from "$lib/assets/icons/loading.svelte";

    import { fade } from "svelte/transition";

    import { onMount } from "svelte";

    import SvgIcon from "$lib/components/ui/SvgIcon";
    import { splashState } from "$lib/state";

    onMount(() => {
        splashState.isAppear = false
    });
</script>

{#if splashState.isAppear}
    <div transition:fade={{ duration: 200 }} class="transition-all duration-500 z-1000 splash-clip fixed top-0 left-0 w-full h-full bg-label flex-col-center">
        <SvgIcon Svg={LoadingIcon} size={100} class="text-base animate-spin" />
        <p class="text-base text-xl">読み込み中......</p>
    </div>
{/if}

<style>
    @reference "../../../../routes/layout.css";

    @keyframes move-clip-hole {
        from {
            mask-size: 0px, 100%;
        }
        to {
            mask-size: 1000%, 100%;
        }
    }

    .clip-hole {
        animation: move-clip-hole 1s ease-in-out forwards;
    }

    .splash-clip {
        /* -webkit-mask-image: radial-gradient(circle 500px at center, transparent 100%, black 100%); */
        /* mask-image: radial-gradient(circle 500px at center, transparent 100%, black 100%);
        mask-size: 80%;
        mask-position: 0% 50%; */

        mask-image: url('/logo.svg'), linear-gradient(black, black);
        -webkit-mask-image: url('/logo.svg'), linear-gradient(black, black);
        mask-repeat: no-repeat;

        mask-composite: exclude;
        -webkit-mask-composite: destination-out;

        mask-position: center center;
        -webkit-mask-position: center center;

        mask-size: 0px, 100%;

        /* mask-size: 100% 100%; */
    }
</style>
