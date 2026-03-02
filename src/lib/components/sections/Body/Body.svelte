<script lang="ts">
    import MailIcon from "$lib/assets/icons/mail.svelte";
    import SendIcon from "$lib/assets/icons/send.svelte";
    import ToolsIcon from "$lib/assets/icons/tools.svelte";
    import ArtIcon from "$lib/assets/icons/art.svelte";
    import ArrowStickIcon from "$lib/assets/icons/arrow-stick.svelte";
    import DiscordLightIcon from "$lib/assets/icons/light/discord.svg";
    import DiscordDarkIcon from "$lib/assets/icons/dark/discord.svg";
    import GithubLightIcon from "$lib/assets/icons/light/github.svg";
    import GithubDarkIcon from "$lib/assets/icons/dark/github.svg";
    import XLightIcon from "$lib/assets/icons/light/x.svg";
    import XDarkIcon from "$lib/assets/icons/dark/x.svg";

    import FlatCopyButton from "$lib/components/ui/FlatCopyButton";
    import type { LinkItemProps } from "$lib/types";
    import SvgIcon from "$lib/components/ui/SvgIcon";

    // import OfficialSiteLinkCard from "$lib/components/ui/OfficialSiteLinkCard";
    import LinkCard from "$lib/components/ui/LinkCard";

    const officialSites: LinkItemProps[] = [
        { icons: { light: XLightIcon, dark: XDarkIcon }, serviceName: "X", userName: "", url: "https://moiz.lu/x" },
        { icon: MailIcon, serviceName: "メール", userName: "", urlPrefix: "mailto:", url: () => { const a = ["me", "moizlu", "com"]; return `${a[0]}@${a[1]}.${a[2]}`; } },
        { icon: SendIcon, serviceName: "フォーム", userName: "", url: "https://moiz.lu/contact" },
    ];

    const linkItems: LinkItemProps[] = [
        // { icons: { light: favicon }, serviceName: "ポートフォリオ", userName: "moizlu.com", url: "https://moizlu.com" },
        { icon: ToolsIcon, serviceName: "Webツール", userName: "", url: "https://tools.moizlu.com" },
        { icons: { light: XLightIcon, dark: XDarkIcon }, serviceName: "X", userName: "@moizlu", url: "https://moiz.lu/x" },
        { icons: { light: GithubLightIcon, dark: GithubDarkIcon }, serviceName: "GitHub", userName: "moizlu", url: "https://moiz.lu/github" },
        { icons: { light: DiscordLightIcon, dark: DiscordDarkIcon }, serviceName: "Discord", userName: "moizlu", url: "https://moiz.lu/discord" },
        // { icons: { light: SteamLightIcon, dark: SteamDarkIcon }, serviceName: "Steam", userName: "moizlu", url: "https://moiz.lu/steam" },
    ];
</script>

<div class="w-full h-full flex-col-center gap-10">
<div class="flex-col-center gap-3">
    <div class="flex-center">
        <a title="portfolio" href="https://moizlu.com" target="_blank" class="group w-50 border-label border-b flex justify-end items-center">
            <SvgIcon Svg={ArtIcon} size={25} />
            <p class="transition-all duration-300 flex-1 text-center text-xl group-hover:translate-x-1 group-active:translate-x-1">Portfolio</p>
            <SvgIcon Svg={ArrowStickIcon} size={40} class="transition-all duration-300 rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 group-active:-translate-y-1 group-active:translate-x-1" />
        </a>

        <FlatCopyButton text="https://moizlu.com" />
    </div>
    <div class="flex-center">
        <a title="contact me" href="https://moiz.lu/contact" target="_blank" class="group w-50 border-label border-b flex justify-end items-center">
            <SvgIcon Svg={MailIcon} size={25} />
            <p class="transition-all duration-300 flex-1 text-center text-xl group-hover:translate-x-1 group-active:translate-x-1">Contact Me</p>
            <SvgIcon Svg={ArrowStickIcon} size={40} class="transition-all duration-300 rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 group-active:-translate-y-1 group-active:translate-x-1" />
        </a>

        <FlatCopyButton text="https://moiz.lu/contact" />
    </div>
</div>

    <div class="relative w-fit p-2 border-label border-b border-t grid grid-cols-2 xs:grid-cols-4 gap-3">
        <p class="absolute w-full top-0 left-0 -mt-3 text-center">
            <span class="px-2 bg-base">Links</span>
        </p>
        {#each linkItems as item}
            <LinkCard {...item} />
        {/each}
    </div>
</div>
