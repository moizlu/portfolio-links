<script lang="ts">
    import type { LinkItemProps } from "$lib/types";
    import SvgIcon from "../SvgIcon";
    import Icon from "../Icon";
    import CopyButton from "../CopyButton";

    interface Props extends LinkItemProps {}
    let { icon, icons, serviceName, userName, url, urlPrefix }: Props = $props();

    const ICON_PX = 30;

    // svelte-ignore state_referenced_locally
    if (typeof url !== 'string') {
        // svelte-ignore state_referenced_locally
        url = url();
    }
</script>

<div class="pl-5 w-full h-13 rounded-2xl shadow-black shadow-lg/50 outline-1 -outline-offset-5">
    <a title={serviceName} href={`${urlPrefix ?? ""}${url}`} target="_blank" class="relative w-full h-full flex justify-start items-center">
        {#if icon}
            <SvgIcon Svg={icon} size={ICON_PX} class="text-label" />
        {:else if icons?.light}
            {#if icons.dark}
                <Icon lightSrc={icons.light} darkSrc={icons.dark} size={ICON_PX} alt={serviceName} class="pointer-events-none" />
            {:else}
                <img src={icons.light} width={ICON_PX} height={ICON_PX} alt={serviceName} class="pointer-events-none">
            {/if}
        {/if}

        <p class="flex-1 text-sm text-center">{serviceName}</p>

        <CopyButton text={url} onclick={(e) => e.preventDefault()} class="-m-2 bottom-0 right-0 bg-base border" />
    </a>
</div>
