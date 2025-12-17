<script lang="ts">
  import { page } from "$app/stores";

  let menuOpen = false;

  const navLinks = [
    { href: "/catalog", label: "Shop All" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="header">
  <div class="container">
    <nav class="nav">
      <!-- Left spacer for centering -->
      <div class="nav-spacer"></div>

      <!-- Centered logo -->
      <a href="/" class="logo" on:click={closeMenu}>
        <img src="/logo.jpg" alt="Cutting Edge" class="logo-image" />
        <span class="logo-name">Cutting Edge</span>
      </a>

      <!-- Right nav links -->
      <ul class="nav-links" class:open={menuOpen}>
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="nav-link"
              class:active={$page.url.pathname === link.href}
              on:click={closeMenu}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>

      <button
        class="menu-toggle"
        class:open={menuOpen}
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-fixed);
    padding: var(--space-4) 0;
    background: var(--color-bg);
    transition: all var(--transition-base);
    backdrop-filter: blur(10px);
    background: rgba(245, 240, 233, 0.95);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-spacer {
    flex: 1;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-text);
    text-decoration: none;
    transition: opacity var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .logo:hover {
    opacity: 0.8;
  }

  .logo-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .logo-name {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    letter-spacing: -0.01em;
    color: var(--color-text);
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: var(--space-8);
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: flex-end;
  }

  .nav-link {
    position: relative;
    color: var(--color-text);
    font-size: var(--text-sm);
    font-weight: var(--font-normal);
    padding: var(--space-2) 0;
    transition: color var(--transition-fast);
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--color-primary);
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    transition: all var(--transition-base);
  }

  .menu-toggle.open span:first-child {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open span:last-child {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    .logo {
      position: relative;
      left: auto;
      transform: none;
    }

    .nav-spacer {
      display: none;
    }

    .menu-toggle {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-8);
      background: var(--color-bg);
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-base);
    }

    .nav-links.open {
      opacity: 1;
      visibility: visible;
    }

    .nav-link {
      font-size: var(--text-xl);
    }
  }
</style>
