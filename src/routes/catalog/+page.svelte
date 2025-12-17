<script lang="ts">
    import ProductCard from "$lib/components/ProductCard.svelte";
    import { getAllProducts } from "$lib/data/products";

    const products = getAllProducts();
</script>

<svelte:head>
    <title>Shop | Cutting Edge</title>
    <meta
        name="description"
        content="Browse our complete collection of handcrafted cutting boards. Each piece is unique, made from reclaimed wood."
    />
</svelte:head>

<section class="catalog">
    <div class="container">
        <header class="catalog-header">
            <h1>Shop All</h1>
            <p class="catalog-count">{products.length} Products</p>
        </header>

        <div class="products-grid">
            {#each products as product, i}
                <div
                    class="product-wrapper"
                    style="animation-delay: {i * 0.05}s"
                >
                    <ProductCard {product} />
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .catalog {
        padding: var(--space-32) 0 var(--space-20);
    }

    .catalog-header {
        text-align: center;
        margin-bottom: var(--space-12);
    }

    .catalog-header h1 {
        font-family: var(--font-heading);
        font-size: var(--text-4xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-2);
    }

    .catalog-count {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-10);
    }

    .product-wrapper {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }

    @media (max-width: 1024px) {
        .products-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .catalog-header h1 {
            font-size: var(--text-3xl);
        }

        .products-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
