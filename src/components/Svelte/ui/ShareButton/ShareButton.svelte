<script lang="ts">
    import Modal from "../Modal/Modal.svelte";
    import CopyButton from "../CopyButton/CopyButton.svelte";

    let isOpen: boolean = $state(false);

    const onclick = () => {
        isOpen = !isOpen;
    }
</script>

<!-- 共有ボタン -->
<button class="fixed top-0 right-2 sm:right-[calc(50%-var(--breakpoint-sm)/2)] m-5 z-105" {onclick}>
    <img src="/icons/light/share.svg" alt="share" width={70} class="drop-shadow-zinc-100 drop-shadow-sm block dark:hidden">
    <img src="/icons/dark/share.svg" alt="share" width={70} class="drop-shadow-zinc-800 drop-shadow-sm hidden dark:block">
</button>

<!-- モーダル -->
<Modal bind:isOpen={isOpen}>
    <div class="flex flex-col justify-center items-center
                p-5 pt-10
                bg-zinc-100 dark:bg-zinc-800
                shwdow-white dark:shadow-zinc-950 shadow-lg
                scale-50 xs:scale-75 sm:scale-100
    ">
        <img src="/icons/light/home-qr.svg" alt="QR code" width={300} class="block dark:hidden">
        <img src="/icons/dark/home-qr.svg" alt="QR code" width={300} class="hidden dark:block">

        <div class="flex justify-center items-center gap-4">
            <p class="text-4xl">https://moiz.lu/</p>
            <CopyButton className="m-10" url="https://moiz.lu/" />
        </div>
    </div>
</Modal>
