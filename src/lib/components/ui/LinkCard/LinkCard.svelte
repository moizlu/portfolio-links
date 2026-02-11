<script lang="ts">
    import type { LinkItemProps } from "$lib/types";
    import SvgIcon from "../SvgIcon";
    import Icon from "../Icon";
    import CopyButton from "../CopyButton";

    interface Props extends LinkItemProps {}
    let { icon, icons, serviceName, userName, url, urlPrefix }: Props = $props();

    // svelte-ignore state_referenced_locally
    if (typeof url !== 'string') {
        // svelte-ignore state_referenced_locally
        url = url();
    }
</script>

<div class="w-75 h-20 flex justify-between items-center outline-label rounded-4xl button-general outline-1 -outline-offset-5">
    <a title={serviceName} href={`${urlPrefix ?? ""}${url}`} target="_blank" class="w-full h-full flex justify-start items-center cursor-pointer">
        {#if icon}
            <SvgIcon Svg={icon} size={35} class="m-5 text-label" />
        {:else if icons?.light}
            {#if icons.dark}
                <Icon lightSrc={icons.light} darkSrc={icons.dark} size={35} alt={serviceName} class="m-5" />
            {:else}
                <img src={icons.light} width={35} height={35} alt={serviceName} class="m-5">
            {/if}
        {/if}

        <div class="flex-1 flex-col-center gap-1">
            <p class="text-lg">{serviceName}</p>
            <p class="text-xs">{userName}</p>
        </div>
    </a>

    <CopyButton text={url} class="mr-3" />
</div>
