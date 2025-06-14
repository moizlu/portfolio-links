<script lang="ts">
    import clsx from 'clsx';

    interface Props {
        url: string;
        size?:number;
        className?: string;
    }
    const { url, size=25, className }: Props = $props();
</script>

<button class={clsx(className, `flex justify-center items-center
                                transition-all duration-300
                                w-15 h-15 m-2 p-3
                                bg-zinc-800 dark:bg-zinc-100
                                shadow-zinc-500 shadow-md
                                active:bg-zinc-300 dark:active:bg-zinc-600`
)}
        onclick={() => { navigator.clipboard.writeText(url); }}>

    <img src="/icons/light/copy.svg" alt="copy" width={size} class="block dark:hidden" />
    <img src="/icons/dark/copy.svg" alt="copy" width={size} class="hidden dark:block" />
</button>
