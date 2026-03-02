<script lang="ts">
    import ShareButton from "$lib/components/ui/ShareButton";
    import Profile from "$lib/components/sections/Profile";
    import Body from "$lib/components/sections/Body";
</script>

<main class="p-5 pt-5 pb-30 w-full min-h-dvh h-full flex-col-center">
    <div class="w-full max-w-200 relative flex-col-center gap-6">
        <ShareButton />
        <Profile />
        <Body />
    </div>

    <p>&copy; 2026 もいずる</p>
</main>
