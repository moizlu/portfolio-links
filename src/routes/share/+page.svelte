<script lang="ts">
    import QrImg from "$lib/assets/icons/light/home-qr.svg";

    import { browser } from "$app/env";
    import CloseButton from "$lib/components/ui/CloseButton";
    import CopyIcon from "$lib/components/ui/CopyIcon";

    let copied = $state(false);

    const onCopyClick = () => {
        navigator.clipboard.writeText("https://moiz.lu");
        copied = true;

        setTimeout(() => {
            copied = false
        }, 3000);
    }
</script>

<main>
    <CloseButton />
    <img src={QrImg} alt="QR" width={300} height={300}>
    <button onclick={onCopyClick} class="display-link-container" disabled={!browser}>
        <h3>https://moiz.lu/</h3>
        {#if browser}
            <CopyIcon {copied} />
        {/if}
    </button>
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        height: 100dvh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        overflow-y: auto;
    }

    .display-link-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
