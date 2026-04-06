<script lang="ts">
    import ShareButton from "$lib/components/ui/ShareButton";
    import Profile from "$lib/components/sections/Profile";
    import Body from "$lib/components/sections/Body";
</script>

<main class="p-5 pt-5 pb-30 w-full h-full flex-col-center">
    <div class="w-full max-w-200 relative">
        <ShareButton />
        <div class="w-full py-5 flex-col-center gap-6 bg-base/50 rounded-4xl border-label border shadow-black shadow-lg/50">
            <Profile />
            <Body />
        </div>
    </div>
</main>
