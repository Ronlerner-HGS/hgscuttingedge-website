<script lang="ts">
    import ProductCard from "$lib/components/ProductCard.svelte";
    import { getFeaturedProducts } from "$lib/data/products";

    const featuredProducts = getFeaturedProducts();
</script>

<svelte:head>
    <title>Cutting Edge | Handcrafted Cutting Boards</title>
    <meta
        name="description"
        content="Beautiful cutting boards crafted from reclaimed and repurposed wood. Proceeds support the Clean Foundation. Reclaimed. Repurposed. Replanted."
    />
</svelte:head>


<!-- Intro Section -->
<section class="intro section">
    <div class="container">
        <div class="intro-content">
            <h2>Handmade with Purpose</h2>
            <p>
                Each cutting board is handcrafted from carefully selected
                reclaimed wood. Beautiful, functional, and sustainable – every
                piece tells a story.
            </p>
        </div>
    </div>
</section>

<!-- Featured Products Section -->
<section class="products section">
    <div class="container">
        <div class="products-grid">
            {#each featuredProducts as product, i}
                <div
                    class="product-wrapper"
                    style="animation-delay: {i * 0.1}s"
                >
                    <ProductCard {product} />
                </div>
            {/each}
        </div>

        <div class="section-cta">
            <a href="/catalog" class="btn btn-outline">Shop All</a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact section" id="contact">
    <div class="container">
        <div class="contact-content">
            <h2>Get in Touch</h2>
            <p>
                Interested in a cutting board or want to commission a custom
                piece? We'd love to hear from you.
            </p>
            <a
                href="mailto:thecuttingedgecompanyhgs@gmail.com?subject=Cutting%20Board%20Inquiry"
                class="btn btn-primary"
            >
                Send Message
            </a>
        </div>
    </div>
</section>

<style>
    /* Intro Section */
    .intro {
        padding: var(--space-20) 0;
    }

    .intro-content {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }

    .intro-content h2 {
        font-family: var(--font-heading);
        font-size: var(--text-3xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-4);
    }

    .intro-content p {
        font-size: var(--text-lg);
        color: var(--color-text-secondary);
        line-height: var(--leading-relaxed);
    }

    /* Products Section */
    .products {
        padding: var(--space-12) 0 var(--space-20);
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-10);
        margin-bottom: var(--space-12);
    }

    .product-wrapper {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }

    .section-cta {
        text-align: center;
    }

    /* Contact Section */
    .contact {
        background: var(--color-bg-secondary);
        text-align: center;
        padding: var(--space-20) 0;
    }

    .contact-content {
        max-width: 500px;
        margin: 0 auto;
    }

    .contact-content h2 {
        font-family: var(--font-heading);
        font-size: var(--text-3xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-4);
    }

    .contact-content p {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
    }

    @media (max-width: 1024px) {
        .products-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .products-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
