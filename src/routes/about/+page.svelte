<script lang="ts">
</script>

<svelte:head>
    <title>About | Cutting Edge</title>
    <meta
        name="description"
        content="Learn about Cutting Edge - our mission to craft beautiful cutting boards from reclaimed wood while supporting environmental initiatives."
    />
</svelte:head>

<section class="about">
    <div class="container">
        <header class="about-header">
            <h1>About</h1>
        </header>

        <div class="about-content">
            <div class="about-text">
                <h2>Reclaimed. Repurposed. Replanted.</h2>
                <p>
                    Every piece of wood has a story. At Cutting Edge, we give
                    forgotten timber a second life, transforming it into
                    functional works of art for your kitchen.
                </p>
                <p>
                    What started as a passion project has grown into something
                    more meaningful. We source reclaimed wood from old barns,
                    furniture, and construction projects that would otherwise
                    end up in landfills.
                </p>
                <p>
                    Each cutting board is handcrafted with care, preserving the
                    unique character and grain patterns of its source material.
                    No two boards are ever the same.
                </p>
            </div>

            <div class="about-mission">
                <h3>Supporting the Clean Foundation</h3>
                <p>
                    Proceeds from every cutting board sold go directly to the
                    <a
                        href="https://cleanfoundation.ca"
                        target="_blank"
                        rel="noopener">Clean Foundation</a
                    >, a Nova Scotia-based environmental charity working to
                    restore natural habitats and promote sustainable practices.
                </p>
                <a
                    href="https://cleanfoundation.ca"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-outline"
                >
                    Learn More
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .about {
        padding: var(--space-32) 0 var(--space-20);
    }

    .about-header {
        text-align: center;
        margin-bottom: var(--space-16);
    }

    .about-header h1 {
        font-family: var(--font-heading);
        font-size: var(--text-4xl);
        font-weight: var(--font-normal);
    }

    .about-content {
        max-width: 700px;
        margin: 0 auto;
    }

    .about-text {
        margin-bottom: var(--space-16);
    }

    .about-text h2 {
        font-family: var(--font-heading);
        font-size: var(--text-2xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-6);
        color: var(--color-primary);
    }

    .about-text p {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: var(--leading-relaxed);
        margin-bottom: var(--space-4);
    }

    .about-mission {
        padding: var(--space-8);
        background: var(--color-bg-secondary);
        text-align: center;
    }

    .about-mission h3 {
        font-family: var(--font-heading);
        font-size: var(--text-xl);
        font-weight: var(--font-normal);
        margin-bottom: var(--space-4);
    }

    .about-mission p {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
        line-height: var(--leading-relaxed);
    }

    .about-mission a:not(.btn) {
        color: var(--color-primary);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    @media (max-width: 640px) {
        .about-header h1 {
            font-size: var(--text-3xl);
        }
    }
</style>
