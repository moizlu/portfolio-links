<script lang="ts">
    import CloseButton from "$lib/assets/icons/close.svelte";

    import { getLocale } from "$lib/paraglide/runtime";

    import SvgIcon from "../SvgIcon";
</script>

<div class="container">
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a href={(getLocale() === "ja") ? "/" : "/en"}>
        <SvgIcon Svg={CloseButton} size={50} />
    </a>
</div>

<style>
    .container {
        /* pointer-events: none; */

        width: 100%;
        max-width: 500px;

        display: flex;
        flex-direction: row-reverse;
    }

    /* .container > a {
        pointer-events: auto;
    } */
</style>
