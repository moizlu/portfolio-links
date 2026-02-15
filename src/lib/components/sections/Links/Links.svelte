<script lang="ts">
    import MailIcon from "$lib/assets/icons/mail.svelte";
    import DiscordLightIcon from "$lib/assets/icons/light/discord.svg";
    import GithubLightIcon from "$lib/assets/icons/light/github.svg";
    import GithubDarkIcon from "$lib/assets/icons/dark/github.svg";
    import XLightIcon from "$lib/assets/icons/light/x.svg";
    import XDarkIcon from "$lib/assets/icons/dark/x.svg";
    import SteamLightIcon from "$lib/assets/icons/light/steam.svg";
    import SteamDarkIcon from "$lib/assets/icons/dark/steam.svg";

    import favicon from "$lib/assets/favicon.svg";

    import type { LinkItemProps } from "$lib/types";

    import LinkCard from "$lib/components/ui/LinkCard";

    const linkItems: LinkItemProps[] = [
        { icon: MailIcon, serviceName: "お問い合わせ", userName: "moizlu.com", url: "https://moizlu.com/#contact" },
        { icons: { light: favicon }, serviceName: "公式サイト", userName: "moizlu.com", url: "https://moizlu.com" },
        { icons: { light: DiscordLightIcon }, serviceName: "Discord", userName: "moizlu", url: "https://moiz.lu/discord" },
        { icons: { light: GithubLightIcon, dark: GithubDarkIcon }, serviceName: "GitHub", userName: "moizlu", url: "https://moiz.lu/github" },
        { icons: { light: XLightIcon, dark: XDarkIcon }, serviceName: "X(旧Twitter)", userName: "@moizlu", url: "https://moiz.lu/x" },
        { icons: { light: SteamLightIcon, dark: SteamDarkIcon }, serviceName: "Steam", userName: "moizlu", url: "https://moiz.lu/steam" },
    ];
    // ツール集, pixiv, YouTube, インスタは必要に応じて
</script>

<div class="w-full px-5 mb-5 m-2 grid grid-flow-row sm:grid-cols-2 gap-2">
    {#each linkItems as item}
        <LinkCard {...item} />
    {/each}
</div>
