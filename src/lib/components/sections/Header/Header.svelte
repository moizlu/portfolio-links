<script lang="ts">
    import avatar from "$lib/assets/icons/avatar.svg";

    import ChangeThemeButton from "$lib/components/ui/ChangeThemeButton";
    import ChangeLangButton from "$lib/components/ui/ChangeLangButton";
    import ShareButton from "./ShareButton.svelte";

    import { resolve } from "$app/paths"
</script>

<header class="z-100 top-0 left-0 fixed px-2 w-full h-15 bg-base/70 backdrop-blur-sm flex justify-between items-center gap-2">
    <a data-sveltekit-reload href={resolve("/")}>
        <img src={avatar} alt="avatar" width={500} height={500} class="w-10 h-10">
    </a>

    <div class="flex justify-center items-center gap-2">
        <ChangeLangButton />
        <div class="w-[0.5px] h-10 bg-label"></div>
        <ChangeThemeButton />
        <div class="w-[0.5px] h-10 bg-label"></div>
        <ShareButton />
    </div>
</header>
