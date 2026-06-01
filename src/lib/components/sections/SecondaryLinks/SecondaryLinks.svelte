<script lang="ts">
    import ToolsIcon from "$lib/assets/icons/tools.svelte";
    import GitHubLight from "$lib/assets/icons/light/github.svg";
    import GitHubDark from "$lib/assets/icons/dark/github.svg";
    import XLight from "$lib/assets/icons/light/x.svg";
    import XDark from "$lib/assets/icons/dark/x.svg";
    import DiscordLight from "$lib/assets/icons/light/discord.svg";
    import DiscordDark from "$lib/assets/icons/dark/discord.svg";

    import { m } from "$lib/paraglide/messages";

    import Link from "./Link.svelte";

    import SvgIcon from "$lib/components/ui/SvgIcon";
    import Icon from "$lib/components/ui/Icon";
</script>

<div class="flex justify-center items-center gap-2 flex-wrap">
    <Link name={m.web_tool()} url="https://tools.moizlu.com">
        <SvgIcon Svg={ToolsIcon} size={30} />
    </Link>
    <Link name="GitHub" url="https://tools.moizlu.com">
        <Icon lightSrc={GitHubLight} darkSrc={GitHubDark} size={20} class="m-1.5" />
    </Link>
    <Link name="X(Twitter)" url="https://moiz.lu/x">
        <Icon lightSrc={XLight} darkSrc={XDark} size={20} class="m-1.5" />
    </Link>
    <Link name="Discord" url="/discord" target="_self">
        <Icon lightSrc={DiscordLight} darkSrc={DiscordDark} size={20} class="m-2.25" />
    </Link>
</div>