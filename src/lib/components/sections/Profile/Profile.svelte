<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    import CopyButton from "$lib/components/ui/CopyButton";
</script>

<div class="-mt-15 m-4 w-full flex-col-center gap-2">
    <img src={favicon} alt="logo" width={100} height={100} class="pointer-events-none drop-shadow-black drop-shadow-lg/50">
    <div class="w-75 sm:w-80 px-6 flex-col-center gap-2">
        <div class="w-full flex-center">
            <h2 class="flex-1 ml-5 text-center">もいずる</h2>
            <CopyButton text="もいずる" class="mr-2 -ml-6" />
        </div>
        <div class="w-full flex-center">
            <h3 class="flex-1 ml-5 text-center">moizlu</h3>
            <CopyButton text="moizlu" class="mr-2 -ml-6" />
        </div>
    </div>

    <p class="text-sm md:text-lg">Webとマイコン開発が好きなプログラマー。</p>
</div>