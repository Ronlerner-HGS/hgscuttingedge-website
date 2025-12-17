<script lang="ts">
    export let title: string = "Cutting Edge";
    export let subtitle: string = "Handcrafted Cutting Boards";
</script>

<section class="hero">
    <div class="hero-header">
        <div class="hero-content">
            <h1 class="hero-title animate-fade-in">{title}</h1>
            <p class="hero-subtitle animate-fade-in stagger-1">{subtitle}</p>
        </div>
        <a href="/catalog" class="btn btn-outline hero-cta animate-fade-in stagger-2">Explore Now</a>
    </div>

    <div class="hero-image-container animate-fade-in stagger-3">
        <img
            src="/hero-banner.jpg"
            alt="Handcrafted cutting boards"
            class="hero-image"
        />
    </div>
</section>

<style>
    .hero {
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-4) var(--space-6) var(--space-8);
        padding-top: calc(var(--space-20) + var(--space-8));
    }

    .hero-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: var(--space-6);
        gap: var(--space-8);
    }

    .hero-content {
        flex: 1;
    }

    .hero-title {
        font-family: var(--font-heading);
        font-size: var(--text-6xl);
        font-weight: var(--font-normal);
        color: var(--color-text);
        letter-spacing: -0.02em;
        margin-bottom: var(--space-2);
        line-height: 1.1;
    }

    .hero-subtitle {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        font-weight: var(--font-light);
    }

    .hero-cta {
        flex-shrink: 0;
    }

    .hero-image-container {
        width: 100%;
        border-radius: 24px;
        overflow: hidden;
    }

    .hero-image {
        width: 100%;
        height: auto;
        display: block;
        aspect-ratio: 16 / 7;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        .hero {
            padding: var(--space-4) var(--space-4) var(--space-6);
            padding-top: calc(var(--space-16) + var(--space-8));
        }

        .hero-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-4);
        }

        .hero-title {
            font-size: var(--text-4xl);
        }

        .hero-subtitle {
            font-size: var(--text-sm);
        }

        .hero-image-container {
            border-radius: 16px;
        }

        .hero-image {
            aspect-ratio: 16 / 9;
        }
    }
</style>
