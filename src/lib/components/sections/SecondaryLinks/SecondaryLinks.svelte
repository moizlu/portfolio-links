<script lang="ts">
    import ToolsIcon from "$lib/assets/icons/tools.svelte";
    import GitHubLight from "$lib/assets/icons/light/github.svg";
    // import GitHubDark from "$lib/assets/icons/dark/github.svg";
    import XLight from "$lib/assets/icons/light/x.svg";
    // import XDark from "$lib/assets/icons/dark/x.svg";
    import DiscordLight from "$lib/assets/icons/light/discord.svg";
    // import DiscordDark from "$lib/assets/icons/dark/discord.svg";

    import { m } from "$lib/paraglide/messages";

    import Link from "./Link.svelte";

    import SvgIcon from '$lib/components/ui/SvgIcon';
  import { getLocale } from "$lib/paraglide/runtime";
    // import Icon from '$lib/components/ui/Icon';
</script>

<section>
    <Link name={m.web_tool()} url="https://tools.moizlu.com">
        <SvgIcon Svg={ToolsIcon} size={20} />
    </Link>
    <Link name="GitHub" url="https://moiz.lu/github">
        <img src={GitHubLight} width={20} height={20} alt="GitHub">
    </Link>
    <Link name="X(Twitter)" url="https://moiz.lu/x">
        <img src={XLight} width={20} height={20} alt="X">
    </Link>
    <Link name="Discord" url={(getLocale() === "ja") ? "/discord" : "/en/discord"} target="_self">
        <img src={DiscordLight} width={20} height={20} alt="Discord">
    </Link>
</section>

<style>
    section {
        width: 100%;
        max-width: 300px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
