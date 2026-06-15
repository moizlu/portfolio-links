<script lang="ts">
    import DiscordLight from "$lib/assets/icons/light/discord.svg";
    import CloseButton from "$lib/components/ui/CloseButton";

    import { browser } from "$app/env";
    import { m } from "$lib/paraglide/messages";

    import CopyIcon from "$lib/components/ui/CopyIcon";

    let copied = $state(false);

    const onCopyClick = () => {
        navigator.clipboard.writeText("moizlu");
        copied = true;

        setTimeout(() => {
            copied = false
        }, 3000);
    }
</script>

<main>
    <CloseButton />
    <div class="logo-container">
        <img src={DiscordLight} alt="Discord" width={50} height={50}>
        <h1>Discord</h1>
    </div>
    <p class="user-id-p">{m.user_name()}:</p>
    <button title="moizlu" onclick={onCopyClick} class="user-id" disabled={!browser}>
        <h3>moizlu</h3>
        {#if browser}
            <CopyIcon {copied} />
        {/if}
    </button>

    <a target="_blank" href="https://moiz.lu/discord-profile" class="link-button">{m.link_to_profile()} ↗</a>
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

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        user-select: none;
    }

    .user-id-p {
        user-select: none;
    }

    .user-id {
        font-weight: bold;
        user-select: text;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link-button {
        padding: 10px;

        background-color: #000;
        color: #fff;

        background-color: var(--color-label);
        color: var(--color-base);
        border-radius: 5px;

        user-select: none;
    }
</style>
