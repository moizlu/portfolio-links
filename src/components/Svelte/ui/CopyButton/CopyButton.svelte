<script lang="ts">
    interface Props {
        url: string;
        size: number;
    }
    let { url, size }: Props = $props();
</script>

<button class="m-2 p-4
                bg-[#474747]
                rounded-full shadow-black shadow-sm
                transition-all duration-500 active:bg-gray-200
                "
        aria-label="copy"
        onclick={() => {
            navigator.clipboard.writeText(url);
        }}
>
    <img src="/icons/copy.svg" alt="copy" width={size} class="m-2">
</button>
