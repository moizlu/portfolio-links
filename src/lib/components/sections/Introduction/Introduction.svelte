<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";

    import avatar from "$lib/assets/icons/avatar.svg";
</script>

<div class="flex flex-col justify-center items-center gap-3">
    <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-5">
            <img src={avatar} width={500} height={500} alt="avatar" class="w-20 h-20 sm:w-30 sm:h-30" />
            <div class="flex flex-col justify-center items-center">
                <p class="text-3xl sm:text-5xl font-bold">もいずる</p>
                <p class="text-2xl sm:text-4xl font-medium">MOIZLU</p>
            </div>
        </div>

        {#if getLocale() === "ja"}
            <p class="text-lg sm:text-2xl text-center">専門学生 / Web開発</p>
        {:else}
            <p class="text-lg sm:text-2xl text-center">Vocational school Student /<wbr> WebDevelopment</p>
        {/if}
    </div>

    <p class="text-center text-xs font-light">SvelteKit, Tailwind CSS, Arduino, Blender...</p>

    {#if getLocale() === "ja"}
        <p class="text-sm text-center">Webとマイコン開発が好きなプログラマー。<br>3DCGにも手を出したいと考えている。</p>
    {:else}
        <p class="text-sm text-center">I'm a programmer who enjoys web and microcontroller development.<br>I’m also thinking about getting into 3D CG.</p>
    {/if}
</div>
