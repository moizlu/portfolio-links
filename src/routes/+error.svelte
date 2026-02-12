<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";

    if (browser) {
        if (page.status === 404) {
            goto('/');
        }
    }
</script>

<div class="w-full h-dvh flex-center">
    <h1>エラー:{page.status}</h1>
</div>
