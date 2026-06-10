<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
    <div class="main-container">
        <p>このページは古いブラウザ用のフォールバックです。<br>モダンブラウザでアクセスいただくと最適なレイアウトで表示されます。</p>
        <p>This page is a fallback for older browsers.<br>Please use a modern browser to view the page with the optimal layout.</p>
        <h1>もいずる / MOIZLU</h1>
        <h3>専門学生 / Web開発</h3>
        <h3>Vocational school Student / Web Development</h3>

        <div class="main-links-container">
            <a target="_blank" href="https://moizlu.com">
                ポートフォリオサイト<br>
                Portfolio ↗
            </a>
            <a target="_blank" href="https://moiz.lu/contact">
                お問い合わせ<br>
                Contact Me ↗
            </a>
        </div>

        <div class="secondary-links-container">
            <a target="_blank" href="https://tools.moizlu.com">Web Tool ↗</a>
            <a target="_blank" href="https://moiz.lu/github">GitHub ↗</a>
            <a target="_blank" href="https://moiz.lu/x">X(Twitter) ↗</a>
            <a target="_blank" href="https://moiz.lu/discord-profile">Discord ↗</a>
        </div>

        <p>いずれもユーザー名は｢moizlu｣です。</p>
        <p>The username for both is "moizlu."</p>
    </div>
</main>

<style>
    main {
        width: 100%;
        min-width: 600px;
        font-family: sans-serif;
    }
    p {
        margin: 0px;
    }

    h3 {
        margin: 0px;
    }

    .main-container {
        width: 600px;
        margin-inline: auto;
    }

    .main-links-container {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    .secondary-links-container {
        display: inline-block;
    }
</style>
