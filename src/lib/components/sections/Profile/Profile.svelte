<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    import CopyButton from "$lib/components/ui/CopyButton";
</script>

<div class="-mt-15 m-4 w-full flex-col-center gap-2">
    <img src={favicon} alt="logo" width={200} height={200} class="pointer-events-none">
    <div class="w-75 sm:w-80 px-6 flex-col-center">
        <div class="w-full flex-center">
            <h2 class="flex-1 ml-10 text-center">もいずる</h2>
            <CopyButton text="もいずる" class="mr-2 -ml-6 scale-75" />
        </div>
        <div class="w-full flex-center">
            <h3 class="flex-1 ml-10 text-center">moizlu</h3>
            <CopyButton text="moizlu" class="mr-2 -ml-6 scale-75" />
        </div>
    </div>

    <p class="text-sm md:text-lg">Webとマイコン開発が好きなプログラマー。</p>
</div>