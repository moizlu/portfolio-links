<script lang="ts">
    import CopyIcon from "$lib/assets/icons/copy.svelte";
    import CheckIcon from "$lib/assets/icons/check.svelte";

    import type { HTMLAttributes } from "svelte/elements";

    import SvgIcon from "../SvgIcon";

    interface Props extends HTMLAttributes<HTMLDivElement> {
        copied: boolean;
    }
    let { copied = $bindable(false), class: className, ...props }: Props = $props();
</script>

<div {...props} class="{className} wrapper">
    <div class="container" class:copied={copied}>
        <SvgIcon Svg={CopyIcon} size={500} class="copy-icon-icon" />
        <SvgIcon Svg={CheckIcon} size={500} class="copy-icon-icon" />
    </div>
</div>

<style>
    .wrapper {
        width: 2.5rem;
        height: 2.5rem;
        overflow: clip;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: max-content;
        max-height: max-content;
        transition-property: all;
        transition-duration: 600ms;
    }

    .container.copied {
        transform: translateX(-3.25rem);
    }

    :global(.copy-icon-icon) {
        width: 2.5rem;
        height: 2.5rem;
    }
</style>