<script lang="ts">
    import ShareButton from "$lib/components/ui/ShareButton";
    import Profile from "$lib/components/sections/Profile";
    import Body from "$lib/components/sections/Body";
</script>

<main class="w-full min-h-dvh h-full flex-col-center">
    <div class="p-5 py-10 w-full max-w-200 relative flex-col-center gap-6">
        <ShareButton />
        <Profile />
        <Body />
    </div>

    <p>&copy; 2026 もいずる</p>
</main>
