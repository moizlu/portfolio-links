<script lang="ts">
    import { browser } from "$app/env";
    import { page } from "$app/state";
    import { resolve } from "$app/paths";
</script>

<main>
    <h1>{page.status}</h1>
        <h3>{#if browser}{window.location.pathname.slice(1)}{/if}</h3>
    <h2>{page.error?.message}</h2>
    <a href={resolve("/")} class="return-button">ホームに戻る</a>
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        /* min-height: 100dvh; */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    h3 {
        width: 70%;
        height: 40px;
        text-align: center;
        padding-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .return-button {
        padding: 10px;

        background-color: #000;
        color: #fff;

        background-color: var(--color-label);
        color: var(--color-base);
        border-radius: 5px;
    }
</style>
