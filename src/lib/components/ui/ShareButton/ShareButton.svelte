<script lang="ts">
    import ShareIcon from "$lib/assets/icons/share.svelte";
    import CloseIcon from "$lib/assets/icons/close.svelte";
    import QRLightIcon from "$lib/assets/icons/light/home-qr.svg";
    import QRDarkIcon from "$lib/assets/icons/Dark/home-qr.svg";

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
        })
    }
</script>

{#snippet shareDialog()}
    <div class="flex-col-center">
        <Icon lightSrc={QRLightIcon} darkSrc={QRDarkIcon} size={250} />
        <div class="flex-center">
            <p>https://moiz.lu/</p>
            <CopyButton text="https://moiz.lu/" />
        </div>
    </div>
{/snippet}

<div class="z-100 mx-auto max-w-200 w-full fixed top-0 flex justify-end items-center pointer-events-none cursor-pointer">
        {#if dialog.isOpened}
            <button title="close" onclick={() => dialog.deactivate()} class="pointer-events-auto cursor-pointer">
                <SvgIcon Svg={CloseIcon} size={50} class="m-2 drop-shadow-base drop-shadow-sm/100" />
            </button>
        {:else}
            <button title="share" {onclick} class="pointer-events-auto cursor-pointer">
                <SvgIcon Svg={ShareIcon} size={50} class="m-2 drop-shadow-base drop-shadow-sm/100" />
            </button>
        {/if}
</div>
