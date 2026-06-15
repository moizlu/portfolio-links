<script lang="ts">
    import PortfolioIcon from '$lib/assets/icons/portfolio.svelte';
    import MailIcon from '$lib/assets/icons/mail.svelte';

    import SvgIcon from '$lib/components/ui/SvgIcon';
    import type { SvgComponent } from '$lib/types';
</script>

{#snippet link(title: string, href: string, icon: SvgComponent)}
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a title={title} href={href} class="link">
        <SvgIcon Svg={icon} size={30} />
        <p>{title}</p>
    </a>
{/snippet}

<section>
    {@render link("Portfolio", "https://moizlu.com", PortfolioIcon)}
    {@render link("Contact Me", "https://moiz.lu/contact", MailIcon)}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .link {
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link > p {
        flex: 1;
        text-align: center;
    }
</style>
