<script lang="ts">
    import DiscordLightIcon from "$lib/assets/icons/light/discord-full.svg";
    import DiscordDarkIcon from "$lib/assets/icons/dark/discord-full.svg";

    import CopyIcon from "$lib/assets/icons/copy.svelte";
    import CheckIcon from "$lib/assets/icons/check.svelte";
    import JumpIcon from "$lib/assets/icons/jump.svelte";
    import HomeIcon from "$lib/assets/icons/home.svelte";

    import SvgIcon from "$lib/components/ui/SvgIcon";
    import Icon from "$lib/components/ui/Icon";
    import { resolve } from "$app/paths";

    let isCopied = $state(false);

    const onUserNameCopyClick = () => {
        isCopied = true;
        setTimeout(() => {
            isCopied = false;
        }, 3000);
    }
</script>

<main class="p-5 w-full max-w-200 h-full flex-col-center">
    <div class="w-full py-5 flex-col-center gap-2 bg-base/60 dark:bg-base/50 rounded-4xl border-label border shadow-black shadow-lg/50">
        <div class="w-full flex-col-center gap-0">
            <Icon lightSrc={DiscordLightIcon} darkSrc={DiscordDarkIcon} size={200} class="h-7" />
            <p>moizlu</p>
        </div>
        <button onclick={onUserNameCopyClick} class="flex-center button-default cursor-pointer">
            <p>ユーザー名をコピー</p>
            <div class="w-10 h-10 flex-center overflow-clip">
                <div class={["transition-all duration-600 flex-center gap-3", (isCopied) ? "-translate-x-4.5" : "translate-x-4.5"]}>
                    <SvgIcon Svg={CopyIcon} size={30} class="w-6 h-6" />
                    <SvgIcon Svg={CheckIcon} size={30} class="w-6 h-6" />
                </div>
            </div>
        </button>

        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a target="_blank" href="/discord-profile" class="flex-center button-default">
            <p>プロフィールリンク</p>
            <SvgIcon Svg={JumpIcon} size={30} class="w-10 h-10 p-2" />
        </a>

        <a href={resolve("/")} class="button-default flex-center">
            <SvgIcon Svg={HomeIcon} size={30} class="w-10 h-10 pr-2" />
            <p>ホームに戻る</p>
        </a>
    </div>
</main>

<style>
    @reference "../layout.css";

    .button-default {
        @apply transition-all duration-300 rounded-xl p-2 hover:bg-label/3 active:bg-label/10 shadow-black shadow-md/100 hover:shadow-md/50 active:shadow-sm/5 cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled disabled:shadow-sm/10 backdrop-blur-sm;
    }
</style>
