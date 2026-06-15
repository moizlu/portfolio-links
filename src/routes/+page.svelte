<script lang="ts">
    import avatar from "$lib/assets/icons/avatar.svg";

    import Introduction from "$lib/components/sections/Introduction";
    import PrimaryLinks from "$lib/components/sections/PrimaryLinks";
    import SecondaryLinks from "$lib/components/sections/SecondaryLinks";
</script>

<main>
    <div class="name-card">
        <img src={avatar} alt="avatar" width={100} height={100}>
        <div class="name-card-name">
            <h1>もいずる</h1>
            <h3>MOIZLU</h3>
        </div>
    </div>

    <Introduction />
    <PrimaryLinks />
    <SecondaryLinks />
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        height: 100dvh;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .name-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name-card-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
