<script lang="ts">
    import CopyIcon from "$lib/assets/icons/copy.svelte";
    import CheckIcon from "$lib/assets/icons/check.svelte";

    import type { HTMLAttributes } from "svelte/elements";

    import SvgIcon from "../SvgIcon";

    interface Props extends HTMLAttributes<HTMLDivElement> {
        copied: boolean;
    }
    let { copied = $bindable(false), class: ClassName, ...props }: Props = $props();
</script>

<div {...props} class={[ClassName, "w-10 h-10 overflow-clip"]}>
    <div class={["transition-all duration-600 w-max max-h-max flex justify-center items-center gap-2", (copied) && "-translate-x-13"]}>
        <SvgIcon Svg={CopyIcon} size={500} class="w-10 h-10" />
        <SvgIcon Svg={CheckIcon} size={500} class="w-10 h-10" />
    </div>
</div>
