<script lang="ts">
    import ShareIcon from "$lib/assets/icons/share.svelte";
    import CloseIcon from "$lib/assets/icons/close.svelte";
    import QRLightIcon from "$lib/assets/icons/light/home-qr.svg";
    import QRDarkIcon from "$lib/assets/icons/dark/home-qr.svg";

    import CopyButton from "../CopyButton";

    import { dialog } from "../Dialog";
    import SvgIcon from "../SvgIcon";
    import Icon from "../Icon";

    const onclick = () => {
        dialog.activate({
            id: "share",
            content: shareDialog,
            isModal: false,
            isDrawWindow: true,
            requireContrast: true
        })
    }
</script>

<!-- <svelte:head>
    <link rel="preload" href={QRLightIcon} as="image" type="image/svg+xml" />
    <link rel="preload" href={QRDarkIcon} as="image" type="image/svg+xml" />
</svelte:head> -->

{#snippet shareDialog()}
    <div class="flex-col-center">
        <Icon lightSrc={QRLightIcon} darkSrc={QRDarkIcon} size={250} />
        <div class="flex-center">
            <p>https://moiz.lu/</p>
            <CopyButton text="https://moiz.lu/" />
        </div>
    </div>
{/snippet}

<div class="z-100 w-full h-30 sticky top-0 mr-10 flex justify-end items-center pointer-events-none cursor-pointer">
        {#if dialog.isOpened}
            <button title="close" onclick={() => dialog.deactivate()} class="pointer-events-auto cursor-pointer">
                <SvgIcon Svg={CloseIcon} size={100} class="m-2 drop-shadow-base drop-shadow-sm/100 translate-x-3" />
            </button>
        {:else}
            <button title="share" {onclick} class="pointer-events-auto cursor-pointer">
                <SvgIcon Svg={ShareIcon} size={50} class="m-2 drop-shadow-base drop-shadow-sm/100" />
            </button>
        {/if}
</div>
