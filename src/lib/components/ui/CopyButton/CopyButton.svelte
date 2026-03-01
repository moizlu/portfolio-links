<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import CopyIcon from "$lib/assets/icons/copy.svelte";
    import CheckIcon from "$lib/assets/icons/check.svelte";

    import SvgIcon from "../SvgIcon";

    interface Props extends HTMLButtonAttributes {
        text: string | (() => string);
    }
    const { text, class: className, onclick: parentOnclick, ...props }: Props = $props();

    let isCopied = $state(false);

    const onclick = (e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => {
        parentOnclick?.(e);

        window.navigator.clipboard.writeText((typeof text === 'string') ? text : text());

        isCopied = true;
        setTimeout(() => {
            isCopied = false;
        }, 3000);
    }
</script>

<button title="copy" {onclick} {...props} class={[className, "overflow-clip w-10 h-10 rounded-full button-general button-bg-default flex-center"]}>
    <div class={["transition-all duration-600 flex-center gap-3", (isCopied) ? "-translate-x-4.5" : "translate-x-4.5"]}>
        <SvgIcon Svg={CopyIcon} size={30} class="w-6 h-6" />
        <SvgIcon Svg={CheckIcon} size={30} class="w-6 h-6" />
    </div>
</button>
