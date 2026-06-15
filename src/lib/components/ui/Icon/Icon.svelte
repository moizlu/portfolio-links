<script lang="ts">
    import type { ClassValue, HTMLImgAttributes } from "svelte/elements";

    interface Props extends Omit<HTMLImgAttributes, "src" | "width" | "height"> {
        lightSrc: string;
        darkSrc: string;

        size?: number;

        imgClassName?: ClassValue;
        lightImgClassName?: ClassValue;
        darkImgClassName?: ClassValue;
    }
    const { lightSrc, darkSrc, size, imgClassName, lightImgClassName, darkImgClassName, class: className, ...props }: Props = $props();
</script>

<div class={[className, "container"]}>
    <img src={lightSrc} width={size}  height={size} class={[imgClassName, lightImgClassName, "img-light"]} {...props} />
    <img src={darkSrc} width={size} height={size} class={[imgClassName, darkImgClassName, "img-dark"]} {...props} />
</div>

<style>
    .container {
        position: relative;
        pointer-events: none;
    }

    .container img {
        transition: opacity 300ms ease;
    }

    .img-light {
        position: absolute;
        opacity: 1;
    }
    .img-dark {
        opacity: 0;
    }

    @media (prefers-color-scheme: dark) {
        .img-light {
            opacity: 0;
        }
        .img-dark {
            opacity: 1;
        }
    }
</style>
