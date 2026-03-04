<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    import CopyButton from "$lib/components/ui/CopyButton";
</script>

<div class="flex-col-center gap-2">
    <div class="p-3 w-full flex-center gap-2 rounded-2xl border-label border">
        <img src={favicon} alt="logo" width={80} height={80} class="w-20 h-20 pointer-events-none drop-shadow-black drop-shadow-lg/50">
        <div class="w-fit flex-col-center gap-2">
            <!-- <div class="w-full flex-center sm:gap-2">
                <h2 class="text-lg sm:text-3xl flex-1 text-center">もいずる</h2>
                <CopyButton text="もいずる" class="scale-75 sm:scale-100" />
            </div> -->
            <h2 class="text-4xl flex-1 text-center">もいずる</h2>
            <h3 class="text-3xl flex-1 text-center">moizlu</h3>
            <!-- <div class="w-full flex-center sm:gap-2">
                <h3 class="text-sm sm:text-2xl flex-1 text-center">moizlu</h3>
                <CopyButton text="moizlu" class="scale-75 sm:scale-100" />
            </div> -->
        </div>
    </div>

    <p class="text-xl">専門学生 / Web開発者</p>
    <p class="text-xs">SvelteKit, Tailwind CSS, Arduino, Blender...</p>

    <p class="mt-2 text-xs md:text-sm text-center">Webとマイコン開発が好きなプログラマー。<br>3DCGにも手を出したいと考えている。</p>
</div>
