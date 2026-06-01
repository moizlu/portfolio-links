<script lang="ts">
    import PortfolioIcon from "$lib/assets/icons/portfolio.svelte";
    import MailIcon from "$lib/assets/icons/mail.svelte";

    import Link from "./Link.svelte";
</script>

<div class="w-full gap-2">
    <div class="w-58 mx-auto">
        <Link name="Portfolio" url="https://moizlu.com" icon={PortfolioIcon} />
        <Link name="Contact Me" url="https://moiz.lu/contact" icon={MailIcon} />
    </div>
</div>
