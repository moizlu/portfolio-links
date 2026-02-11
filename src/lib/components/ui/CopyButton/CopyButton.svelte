<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import CopyIcon from "$lib/assets/icons/copy.svelte";

    import SvgIcon from "../SvgIcon";

    interface Props extends HTMLButtonAttributes {
        text: string;
    }
    const { text, class: className, ...props }: Props = $props();

    const onclick = () => {
        window.navigator.clipboard.writeText(text);
    }
</script>

<button title="copy" {onclick} {...props} class={[className, "m-2 p-3 w-fit h-fit rounded-full button-general button-bg-default"]}>
    <SvgIcon Svg={CopyIcon} size={25} class="" />
</button>
