<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        name: string;
        url: string;
        target?: string;
        children: Snippet;
    }
    const { name, url, target = "_blank", children }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a title={name} target={target} href={url} class="link">
    {@render children()}
    <p>{name}</p>
</a>

<style>
    .link {
        width: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .link > p {
        flex: 1;
        text-align: center;
        font-size: 10px;
    }
</style>
