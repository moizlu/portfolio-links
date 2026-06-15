<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { getLocale } from "$lib/paraglide/runtime";
</script>

<section>
    <h4>{m.brief_intro()}</h4>

    <p class="tech-stack">SvelteKit, Next.js, Tailwind CSS, Arduino, Blender...</p>

    {#if getLocale() === "ja"}
        <p class="long-intro">Webとマイコン開発が好きなプログラマー。<br>3DCGにも手を出したいと考えている。</p>
    {:else}
        <p class="long-intro">I'm a programmer who enjoys web and microcontroller development.<br>I’m also thinking about getting into 3D CG.</p>
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    h4 {
        font-size: 13px;
        text-align: center;
    }

    p {
        text-align: center;
    }

    .tech-stack {
        font-size: 11px;
    }

    .long-intro {
        font-size: 10px;
    }

    @media (min-width: 600px) {
        h4 {
            font-size: 23px;
        }

        .long-intro {
            font-size: 15px;
        }
    }
</style>
