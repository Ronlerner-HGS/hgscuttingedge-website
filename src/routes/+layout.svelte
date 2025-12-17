<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/styles/global.css";
</script>

<Header />

<main class="main">
	<slot />
</main>

<Footer />

<style>
	.main {
		min-height: 100vh;
	}
</style>
