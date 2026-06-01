<script lang="ts">
    import QRLight from "$lib/assets/icons/light/home-qr.svg";
    import QRDark from "$lib/assets/icons/dark/home-qr.svg";
    import ShareIcon from "$lib/assets/icons/share.svelte";

    import { m } from "$lib/paraglide/messages";

    import { modalWindow } from "$lib/store";
    import Icon from "$lib/components/ui/Icon";
    import CopyIcon from "$lib/components/ui/CopyIcon";
    import SvgIcon from "$lib/components/ui/SvgIcon";

    let copied = $state(false);

    const onclick  = () => {
        if (navigator.share) {
            navigator.share({ title: "もいずる | moizlu", url: "https://moiz.lu" });
        } else {
            modalWindow.open({ contents: shareFallback, title: m.share_this_page(), window: { mode: 'window', controls: true, square: true } })
        }
    }

    const onCopyButtonClicked = () => {
        navigator.clipboard.writeText("https://moiz.lu");
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 3000);
    }
</script>

{#snippet shareFallback()}
    <div class="w-full h-full flex flex-col justify-center items-center">
        <Icon lightSrc={QRLight} darkSrc={QRDark} size={500} class="w-50 h-50 min-[300px]:w-75 min-[300px]:h-75" />
        <button onclick={onCopyButtonClicked} class="flex justify-center items-center gap-2">
            <p>https://moiz.lu/</p>
            <CopyIcon bind:copied={copied} />
        </button>
    </div>
{/snippet}

<button title={m.share()} {onclick} class="cursor-pointer">
    <SvgIcon Svg={ShareIcon} size={30} />
</button>
