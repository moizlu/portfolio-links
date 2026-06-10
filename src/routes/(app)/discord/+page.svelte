<script lang="ts">
    import DiscordLight from "$lib/assets/icons/light/discord.svg";
    import DiscordDark from "$lib/assets/icons/dark/discord.svg";
    import HomeIcon from "$lib/assets/icons/home.svelte";

    import { resolve } from "$app/paths";
    import { m } from "$lib/paraglide/messages";

    import Header from "$lib/components/sections/Header";
    import Icon from "$lib/components/ui/Icon";
    import CopyIcon from "$lib/components/ui/CopyIcon";
    import SvgIcon from "$lib/components/ui/SvgIcon";

    let copied = $state(false);

    const onCopyButtonClicked = () => {
        navigator.clipboard.writeText("moizlu");
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 3000);
    }
</script>

<svelte:head>
    <title>{m.links()} | moizlu</title>
</svelte:head>

<main class="w-full h-full pt-15 px-4 min-h-dvh flex flex-col justify-center items-center
before:transition-all before:duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url(/images/room2.webp)] before:bg-cover before:bg-center before:brightness-170 dark:before:brightness-50 before:bg-fixed before:-z-1">
        <Header />

        <div class="p-4 w-full max-w-100 bg-base/70 rounded-xl border-label/20 border-2 flex flex-col justify-center items-center gap-5">
            <div class="flex flex-col justify-center items-center gap-2">
                <div class="flex justify-center items-center gap-5">
                    <Icon lightSrc={DiscordLight} darkSrc={DiscordDark} size={40} />
                    <p class="text-xl font-bold">Discord</p>
                </div>
                <p>moizlu</p>
            </div>

            <a target="_blank" title={m.link_to_profile()} href="https://moiz.lu/discord-profile" class="button flex justify-between items-center">
                <p>{m.link_to_profile()}</p>
                <p class="mr-1">↗</p>
            </a>
            <button onclick={onCopyButtonClicked} class="button flex justify-between items-center cursor-pointer">
                <p>{m.copy_user_name()}</p>
                <CopyIcon bind:copied={copied} class="scale-50 -m-2" />
            </button>

            <a href={resolve("/")} title={m.return_to_home()} class="button mt-5 flex justify-between items-center">
                <SvgIcon Svg={HomeIcon} size={30} class="stroke-label stroke-30 fill-transparent" />
                <p>{m.return_to_home()}</p>
            </a>
        </div>
</main>

<style>
    @reference "../../layout.css";

    .button {
        @apply w-46 h-10 transition-all duration-300 p-2 bg-label/5 rounded-lg shadow-black shadow-lg/50 hover:shadow-none;
    }
</style>
