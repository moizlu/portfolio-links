<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import Icon from "../../ui/Icon/Icon.svelte";

    let isShow = $state(true);

    onMount(() => {
        setTimeout(() => {
            isShow = false;
        }, 500)
    });
</script>

{#if isShow}
    <div transition:fade={{ duration: 300 }} class="fixed z-1000 top-0 left-0 min-h-screen min-w-screen bg-primary transition-colors duration-300 flex flex-col justify-center items-center">
        <img src="https://moiz.lu/logo/light/moizlu.svg" alt="logo" width={100} fetchpriority="high" />

        <Icon lightSrc="/icons/light/loading.svg" darkSrc="/icons/dark/loading.svg" width={100} height={100} fetchpriority="high" class="animate-spin" />

        <p class="m-2 text-4xl sm:text-7xl">もいずる</p>
        <p class="m-2 text-3xl sm:text-6xl">moizlu</p>
    </div>
{/if}
