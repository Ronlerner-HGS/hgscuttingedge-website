<script lang="ts">
    import type { Product } from "$lib/data/products";

    export let product: Product;
</script>

<a href="/catalog/{product.slug}" class="product-card">
    <div class="card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
    </div>
    <div class="card-content">
        <h3 class="card-title">{product.name}</h3>
        <p class="card-price">{product.woodType}</p>
    </div>
</a>

<style>
    .product-card {
        display: block;
        text-decoration: none;
        transition: all var(--transition-base);
    }

    .product-card:hover {
        transform: translateY(-4px);
    }

    .card-image {
        position: relative;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        margin-bottom: var(--space-4);
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
    }

    .product-card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-content {
        text-align: center;
    }

    .card-title {
        font-family: var(--font-heading);
        font-size: var(--text-lg);
        font-weight: var(--font-normal);
        color: var(--color-text);
        margin-bottom: var(--space-1);
        transition: color var(--transition-fast);
    }

    .product-card:hover .card-title {
        color: var(--color-primary);
    }

    .card-price {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
    }
</style>
