<script lang="ts">
    import CopyIcon from "$lib/components/ui/CopyIcon";

    import { m } from "$lib/paraglide/messages";

    import SvgIcon from "$lib/components/ui/SvgIcon";
    import type { SvgComponent } from "$lib/types";

    interface Props {
        name: string;
        url: string;
        icon: SvgComponent;
    }
    const { name, url, icon }: Props = $props();

    let copied = $state(false);

    const onCopyButtonClicked = () => {
        navigator.clipboard.writeText(url);
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 3000);
    }
</script>

<div class="w-full flex justify-between items-center gap-2">
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a title={name} href={url} target="_blank" class="group relative text-2xl font-semibold flex justify-center items-center gap-2
                                                      after:transition-all after:duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-45 after:h-px after:bg-label hover:after:bottom-0
    ">
        <SvgIcon Svg={icon} size={30} class="transition-all duration-300 stroke-30 stroke-label fill-transparent group-hover:fill-label group-hover:stroke-transparent" />
        <p>{name}</p>
    </a>
    <button onclick={onCopyButtonClicked} title={m.copy_name({ name: url })} class="cursor-pointer">
        <CopyIcon bind:copied={copied} class="scale-70" />
    </button>
</div>