<script lang="ts">
    let email = "";

    function handleSubmit() {
        // Placeholder - just show alert for now
        if (email) {
            alert(`Thanks for subscribing with ${email}!`);
            email = "";
        }
    }
</script>

<footer class="footer">
    <!-- Email Signup Section -->
    <section class="signup-section">
        <div class="container">
            <h2 class="signup-title">Let's Keep in Touch</h2>
            <p class="signup-text">
                Subscribe for updates on new boards and sustainable
                craftsmanship.
            </p>
            <form class="signup-form" on:submit|preventDefault={handleSubmit}>
                <input
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                    class="signup-input"
                    required
                />
                <button type="submit" class="signup-button">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="/">Home</a>
                    <a href="/catalog">Shop</a>
                    <a href="/about">About</a>
                    <a href="/#contact">Contact</a>
                </div>

                <div class="footer-social">
                    <a
                        href="https://instagram.com/hgscuttingedge"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            />
                            <path
                                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>
                    <a
                        href="mailto:thecuttingedgecompanyhgs@gmail.com"
                        aria-label="Email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path
                                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                            />
                        </svg>
                    </a>
                </div>

                <p class="footer-copyright">
                    &copy; {new Date().getFullYear()} Cutting Edge. Handcrafted in
                    Nova Scotia.
                </p>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        margin-top: var(--space-24);
    }

    /* Email Signup Section */
    .signup-section {
        background: var(--color-bg-secondary);
        padding: var(--space-20) 0;
        text-align: center;
    }

    .signup-title {
        font-family: var(--font-heading);
        font-size: var(--text-3xl);
        font-weight: var(--font-normal);
        color: var(--color-text);
        margin-bottom: var(--space-3);
    }

    .signup-text {
        color: var(--color-text-secondary);
        font-size: var(--text-base);
        margin-bottom: var(--space-8);
    }

    .signup-form {
        display: flex;
        justify-content: center;
        gap: var(--space-3);
        max-width: 500px;
        margin: 0 auto;
    }

    .signup-input {
        flex: 1;
        padding: var(--space-4) var(--space-5);
        font-size: var(--text-base);
        font-family: var(--font-body);
        border: 1px solid var(--color-border);
        background: var(--color-bg-card);
        color: var(--color-text);
        outline: none;
        transition: border-color var(--transition-fast);
    }

    .signup-input::placeholder {
        color: var(--color-text-muted);
    }

    .signup-input:focus {
        border-color: var(--color-primary);
    }

    .signup-button {
        padding: var(--space-4) var(--space-8);
        font-size: var(--text-sm);
        font-weight: var(--font-medium);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-wide);
        background: var(--color-text);
        color: var(--color-bg);
        border: none;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .signup-button:hover {
        background: var(--color-primary);
    }

    /* Footer Bottom */
    .footer-bottom {
        padding: var(--space-10) 0;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-6);
    }

    .footer-links {
        display: flex;
        gap: var(--space-8);
    }

    .footer-links a {
        color: var(--color-text-secondary);
        font-size: var(--text-sm);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .footer-links a:hover {
        color: var(--color-text);
    }

    .footer-social {
        display: flex;
        gap: var(--space-4);
    }

    .footer-social a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: var(--radius-full);
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
    }

    .footer-social a:hover {
        color: var(--color-text);
    }

    .footer-copyright {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
    }

    @media (max-width: 640px) {
        .signup-form {
            flex-direction: column;
        }

        .signup-button {
            width: 100%;
        }

        .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--space-4);
        }
    }
</style>
