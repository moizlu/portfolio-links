<script lang="ts">
    import CopyIcon from "$lib/components/ui/CopyIcon";

    import type { Snippet } from "svelte";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        name: string;
        url: string;
        target?: string;
        children: Snippet;
    }
    const { name, url, target = "_blank", children }: Props = $props();

    let copied = $state(false);

    const onCopyButtonClicked = (e: Event) => {
        e.preventDefault();
        navigator.clipboard.writeText(url);
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 3000);
    }
</script>

<div class="mt-4 mr-4">
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a title={name} target={target} href={url} class="transition-all duration-300 relative p-2 w-15 h-15 rounded-lg bg-label/10 backdrop-blur-sm flex justify-center items-center shadow-black shadow-lg/50 hover:shadow-none">
        <div class="flex flex-col justify-center items-center">
            {@render children()}
            <p class="text-[10px] text-nowrap">{name}</p>
        </div>

        <button onclick={onCopyButtonClicked} title={m.copy_name({ name: url })} class="absolute top-0 right-0 -m-4 bg-base rounded-full cursor-pointer border-label/30 border">
            <CopyIcon bind:copied={copied} class="scale-50 -m-1" />
        </button>
    </a>
</div>
