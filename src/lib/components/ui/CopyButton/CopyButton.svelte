<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import CopyIcon from "$lib/assets/icons/copy.svelte";
    import CheckIcon from "$lib/assets/icons/check.svelte";

    import SvgIcon from "../SvgIcon";

    interface Props extends HTMLButtonAttributes {
        text: string;
    }
    const { text, class: className, ...props }: Props = $props();

    let isCopied = $state(false);

    const onclick = () => {
        window.navigator.clipboard.writeText(text);

        isCopied = true;
        setTimeout(() => {
            isCopied = false;
        }, 1000);
    }
</script>

<button title="copy" {onclick} {...props} class={[className, "overflow-clip m-2 w-15 h-15 rounded-full button-general button-bg-default flex-center"]}>
    <div class={["transition-all duration-300 flex-center gap-4", (isCopied) ? "-translate-x-7" : "translate-x-7"]}>
        <SvgIcon Svg={CopyIcon} size={30} class=" w-10 h-10" />
        <SvgIcon Svg={CheckIcon} size={30} class="w-10 h-10" />
    </div>
</button>
