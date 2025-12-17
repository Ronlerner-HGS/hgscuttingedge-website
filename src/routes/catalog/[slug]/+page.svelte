<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ product, relatedProducts } = data);
</script>

<svelte:head>
    <title>{product.name} | Cutting Edge</title>
    <meta name="description" content={product.description} />
</svelte:head>

<section class="product-page">
    <div class="container">
        <div class="product-layout">
            <div class="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div class="product-info">
                <h1 class="product-title">{product.name}</h1>
                <p class="product-wood">{product.woodType}</p>

                <p class="product-description">{product.description}</p>

                <div class="product-details">
                    <div class="detail-row">
                        <span class="detail-label">Dimensions</span>
                        <span class="detail-value">{product.dimensions}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Wood Type</span>
                        <span class="detail-value">{product.woodType}</span>
                    </div>
                </div>

                <a
                    href="mailto:thecuttingedgecompanyhgs@gmail.com?subject=Inquiry%20about%20{encodeURIComponent(
                        product.name,
                    )}"
                    class="btn btn-primary"
                >
                    Inquire
                </a>

                <a href="/catalog" class="back-link">← Back to Shop</a>
            </div>
        </div>
    </div>
</section>

<style>
    .product-page {
        padding: var(--space-32) 0 var(--space-20);
    }

    .product-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
        align-items: start;
    }

    .product-image img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    .product-info {
        padding-top: var(--space-8);
    }

    .product-title {
        font-family: var(--font-heading);
        font-size: var(--text-3xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-2);
    }

    .product-wood {
        font-size: var(--text-lg);
        color: var(--color-primary);
        margin-bottom: var(--space-6);
    }

    .product-description {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: var(--leading-relaxed);
        margin-bottom: var(--space-8);
    }

    .product-details {
        margin-bottom: var(--space-8);
        padding: var(--space-6) 0;
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
    }

    .detail-row {
        display: flex;
        justify-content: space-between;
        padding: var(--space-2) 0;
    }

    .detail-label {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
    }

    .detail-value {
        font-size: var(--text-sm);
        color: var(--color-text);
    }

    .btn {
        width: 100%;
        margin-bottom: var(--space-4);
    }

    .back-link {
        display: block;
        text-align: center;
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        text-decoration: none;
    }

    .back-link:hover {
        color: var(--color-text);
    }

    @media (max-width: 768px) {
        .product-layout {
            grid-template-columns: 1fr;
            gap: var(--space-8);
        }

        .product-info {
            padding-top: 0;
        }
    }
</style>
