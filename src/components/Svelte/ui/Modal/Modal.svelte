<script lang="ts">
    interface Props {
        isOpen: boolean;
        children?: any;
    }
    let { isOpen = $bindable(), children }: Props = $props();

    let backgroundElement: HTMLButtonElement | undefined = $state(undefined);

    const onclick = (e: Event) => {
        if (!backgroundElement) { return; }

        if (e.target === backgroundElement) {
            isOpen = false;
        }
    };
</script>

<div class={[`transition-opacity duration-200
            fixed top-0 left-0 w-full h-full
            flex items-center justify-center
            bg-gray-900 blur-2xl
            `, isOpen ? "opacity-75" : "opacity-0 pointer-events-none"]}
    >
</div>

{#if children && isOpen}
    <button class="transition-opacity duration-200
                fixed top-0 left-0 w-full h-full
                flex items-center justify-center
                "
            bind:this={backgroundElement}
            onclick={onclick}
    >
        {@render children()}
    </button>
{/if}
