<script lang="ts">
    import { fade } from "svelte/transition";

    import Modal from "../Modal/Modal.svelte";
    import CopyButton from "../CopyButton/CopyButton.svelte";
    import Icon from "../Icon/Icon.svelte";

    let isOpen: boolean = $state(false);

    const onclick = () => {
        isOpen = !isOpen;
    }
</script>

<!-- 共有ボタン -->
<button class="fixed top-0 right-2 sm:right-[calc(50%-var(--breakpoint-sm)/2)] m-5 z-105" {onclick}>
    {#if isOpen}
        <Icon lightSrc="/icons/light/close.svg" darkSrc="/icons/dark/close.svg" alt="share" width={70} class="drop-shadow-primary drop-shadow-sm" />
    {:else}
        <Icon lightSrc="/icons/light/share.svg" darkSrc="/icons/dark/share.svg" alt="share" width={70} class="drop-shadow-primary drop-shadow-sm" />
    {/if}
</button>

<!-- モーダル -->
<Modal bind:isOpen={isOpen}>
    <div class="flex flex-col justify-center items-center
                p-5 pt-10 m-3
                bg-primary
                shwdow-white dark:shadow-zinc-950 shadow-lg
                scale-50 xs:scale-75 sm:scale-100
    ">

        <Icon lightSrc="/icons/light/home-qr.svg" darkSrc="/icons/dark/home-qr.svg" alt="QR code" width={300} height={300} />

        <div class="flex justify-center items-center gap-4">
            <p class="text-4xl m-2">https://moiz.lu/</p>
            <CopyButton url="https://moiz.lu/" />
        </div>
    </div>
</Modal>
