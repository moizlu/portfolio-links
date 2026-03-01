<script lang="ts">
    import MailIcon from "$lib/assets/icons/mail.svelte";
    import SendIcon from "$lib/assets/icons/send.svelte";
    import ToolsIcon from "$lib/assets/icons/tools.svelte";
    import DiscordLightIcon from "$lib/assets/icons/light/discord.svg";
    import DiscordDarkIcon from "$lib/assets/icons/dark/discord.svg";
    import GithubLightIcon from "$lib/assets/icons/light/github.svg";
    import GithubDarkIcon from "$lib/assets/icons/dark/github.svg";
    import XLightIcon from "$lib/assets/icons/light/x.svg";
    import XDarkIcon from "$lib/assets/icons/dark/x.svg";
    import SteamLightIcon from "$lib/assets/icons/light/steam.svg";
    import SteamDarkIcon from "$lib/assets/icons/dark/steam.svg";

    import favicon from "$lib/assets/favicon.svg";

    import type { LinkItemProps } from "$lib/types";
    // import SvgIcon from "$lib/components/ui/SvgIcon";

    // import OfficialSiteLinkCard from "$lib/components/ui/OfficialSiteLinkCard";
    import LinkCard from "$lib/components/ui/LinkCard";

    const officialSites: LinkItemProps[] = [
        { icons: { light: XLightIcon, dark: XDarkIcon }, serviceName: "X", userName: "", url: "https://moiz.lu/x" },
        { icon: MailIcon, serviceName: "メール", userName: "", urlPrefix: "mailto:", url: () => { const a = ["me", "moizlu", "com"]; return `${a[0]}@${a[1]}.${a[2]}`; } },
        { icon: SendIcon, serviceName: "フォーム", userName: "", url: "https://moiz.lu/contact" },
    ];

    const linkItems: LinkItemProps[] = [
        { icons: { light: favicon }, serviceName: "ポートフォリオ", userName: "moizlu.com", url: "https://moizlu.com" },
        { icon: ToolsIcon, serviceName: "Webツール", userName: "", url: "https://tools.moizlu.com" },
        { icons: { light: XLightIcon, dark: XDarkIcon }, serviceName: "X", userName: "@moizlu", url: "https://moiz.lu/x" },
        { icons: { light: GithubLightIcon, dark: GithubDarkIcon }, serviceName: "GitHub", userName: "moizlu", url: "https://moiz.lu/github" },
        { icons: { light: DiscordLightIcon, dark: DiscordDarkIcon }, serviceName: "Discord", userName: "moizlu", url: "https://moiz.lu/discord" },
        // { icons: { light: SteamLightIcon, dark: SteamDarkIcon }, serviceName: "Steam", userName: "moizlu", url: "https://moiz.lu/steam" },
    ];
</script>

<div class="w-fit h-full flex-col-center gap-4">
    <!-- <div>
        <a title="portfolio" href="https://moizlu.com" target="_blank" class="flex-center">
            <img src={favicon} alt="logo" class="w-10 h-10">
            <p>ポートフォリオサイト</p>
        </a>
    </div> -->

    <div class="p-5 w-fit relative rounded-2xl border-label border">
        <p class="w-full absolute text-xl top-0 left-0 px-auto -mt-4 text-center">
            <span class="px-2 bg-base">お問い合わせ</span>
        </p>

        <div class="w-fit grid grid-cols-2 min-[390px]:grid-cols-3 gap-2">
            {#each officialSites as item}
                <LinkCard {...item} />
            {/each}
        </div>
    </div>

    <!-- <div class="w-full flex-col sm:flex-row  flex-center gap-[0.1rem] sm:gap-3">
        {#each officialSites as item}
            <OfficialSiteLinkCard {...item} />
        {/each}
    </div> -->

    <div class="p-5 w-fit relative rounded-2xl border-label border">
        <p class="w-full absolute text-xl top-0 left-0 px-auto -mt-4 text-center">
            <span class="px-2 bg-base">各種リンク</span>
        </p>

        <div class="w-fit grid grid-flow-row grid-cols-2 min-[390px]:grid-cols-3 min-[750px]:grid-cols-6 gap-2">
            {#each linkItems as item}
                <LinkCard {...item} />
            {/each}
        </div>
    </div>
</div>
