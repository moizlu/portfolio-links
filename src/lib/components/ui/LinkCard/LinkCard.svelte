<script lang="ts">
    import type { LinkItemProps } from "$lib/types";
    import SvgIcon from "../SvgIcon";
    import Icon from "../Icon";
    import CopyButton from "../CopyButton";

    interface Props extends LinkItemProps {}
    let { icon, icons, serviceName, userName, url, urlPrefix }: Props = $props();

    const ICON_PX = 30;

    const generateUrl = (e: Event) => {
        if (typeof url === 'string') { return; }
        if (e.target !== e.currentTarget) { return; }

        const a = document.createElement('a');
        a.href = `${urlPrefix}${url()}`;
        a.click();
    }

    const getUrl = () => {
        if (typeof url === 'string') {
            return url;
        } else {
            return url();
        }
    }
</script>

{#snippet content()}
    <CopyButton text={url} onclick={(e) => e.preventDefault()} class="z-10 -m-4 absolute top-0 right-0 bg-base" />
    {#if icon}
        <SvgIcon Svg={icon} size={ICON_PX} class="text-label md:w-9 md:h-9" />
    {:else if icons?.light}
        {#if icons.dark}
            <!-- メンテナンス性が最悪なので修正を検討 -->
            <Icon lightSrc={icons.light} darkSrc={icons.dark} size={ICON_PX} alt={serviceName} class="md:w-9 md:h-9 md:translate-0.5 pointer-events-none" />
        {:else}
            <img src={icons.light} width={ICON_PX} height={ICON_PX} alt={serviceName} class="md:w-9 md:h-9 pointer-events-none">
        {/if}
    {/if}

    <p class="text-[10px] md:text-xs">{serviceName}</p>
    <p class={["-mt-2 md:-mt-3 text-[8px] md:text-[10px]", (userName === "") && "invisible"]}>{(userName === "") ? "N/A" : userName}</p>

    <!-- <div class="flex-1 flex-col-center gap-1 text-nowrap">
        <p class="text-sm">{serviceName}</p>
        <p class="text-[10px]">{userName}</p>
    </div> -->
{/snippet}

<div class="m-1 w-20 h-20 md:w-24 md:h-24 mt-4 mr-4 flex justify-between items-center outline-label rounded-2xl shadow-black shadow-md/50 bg-label/2 border-label border">
    {#if typeof url === 'string'}
        <a title={serviceName} href={`${urlPrefix ?? ""}${getUrl()}`} target="_blank" class="relative pt-2 w-full h-full flex flex-col justify-center items-center gap-2 cursor-pointer">
            {@render content()}
        </a>
    {:else}
        <div role="button" title={serviceName} tabindex="0" onkeydown={(e) => { if (e.key === 'Enter') { e.currentTarget?.click(); } }} onclick={generateUrl} class="relative pt-2 w-full h-full flex flex-col justify-center items-center gap-2 cursor-pointer">
            {@render content()}
        </div>
    {/if}
</div>
