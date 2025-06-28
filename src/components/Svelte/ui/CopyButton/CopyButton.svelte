<script lang="ts">
    import clsx from 'clsx';
    import Icon from '../Icon/Icon.svelte';

    interface Props {
        url: string;
        size?:number;
        className?: string;
    }
    const { url, size=25, className }: Props = $props();
</script>

<button class={clsx(className, `group flex justify-center items-center
                                transition-all duration-300
                                w-15 h-15 m-2 p-3
                                bg-accent
                                hover:bg-primary active:bg-primary
                                border-accent border-1
                                `
)}
        onclick={() => { navigator.clipboard.writeText(url); }}>
        <img src="" alt="" class="">

    <Icon lightSrc="/icons/light/copy.svg" darkSrc="/icons/dark/copy.svg" alt="copy" width={size} lightImgClassName="group-hover:opacity-0 dark:group-hover:opacity-100" darkImgClassName="dark:group-hover:opacity-0" />
</button>
