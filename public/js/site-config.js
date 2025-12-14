document.addEventListener('DOMContentLoaded', () => {
    fetch('/js/content.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(config => {
            console.log('Site Config Loaded:', config);
            applyConfig(config);
        })
        .catch(error => console.error('Error loading site config:', error));
});

function applyConfig(config) {
    const currentPath = window.location.pathname;

    // 1. Check if current page is disabled via navigation.disabled array
    if (config.navigation && config.navigation.disabled) {
        const isDisabled = config.navigation.disabled.some(path => currentPath.includes(path));
        if (isDisabled) {
            console.warn(`Access to ${currentPath} is disabled. Redirecting to home.`);
            window.location.href = '/';
            return; // Stop further processing
        }
    }

    // 2. Check specific page settings (e.g., Blog)
    if (config.pages && config.pages.blog) {
        if (config.pages.blog.enabled === false) {
            // Redirect if we are currently ON the blog page (and it wasn't caught above)
            // Assuming blog pages might include 'blog' in the path
            if (currentPath.toLowerCase().includes('blog')) {
                console.warn('Blog is disabled. Redirecting to home.');
                window.location.href = '/';
                return;
            }

            // Hide Blog Navigation Items
            hideBlogNavItems();
        }

        if (config.pages.blog.hideFromMenu === true) {
            hideBlogNavItems();
        }
    }
}

function hideBlogNavItems() {
    // Try to find nav links that point to the blog
    // This is a heuristic: looks for anchors with 'blog' in href or text
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.toLowerCase().includes('blog') || link.innerText.toLowerCase().includes('blog'))) {
            // Avoid hiding the logo or home link if they happen to contain 'blog' (unlikely but safe)
            // Also strictly, we only want to hide "Menu" items, typically in a <nav>
            // But for safety, we'll just check if it looks like a blog link.

            // Optional: Check if it's inside a nav element for stricter targeting
            // if (link.closest('nav')) { ... }

            console.log('Hiding blog link:', link);
            link.style.display = 'none';

            // Also try to hide the parent list item if it exists (common in menus: <ul><li><a>...</a></li></ul>)
            const parentLi = link.closest('li');
            if (parentLi) {
                parentLi.style.display = 'none';
            }
        }
    });
}
