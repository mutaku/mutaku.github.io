// Custom JavaScript for enhanced functionality

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add a small loading indicator
            const originalText = this.textContent;
            this.innerHTML = originalText + ' <i class="fas fa-external-link-alt"></i>';
        });
    });

    // Enhanced code block copy functionality
    document.querySelectorAll('.highlight').forEach(block => {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.className = 'copy-button';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: var(--md-accent-fg-color);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 4px 8px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;

        block.style.position = 'relative';
        block.appendChild(button);

        block.addEventListener('mouseenter', () => button.style.opacity = '1');
        block.addEventListener('mouseleave', () => button.style.opacity = '0');

        button.addEventListener('click', async () => {
            const code = block.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code: ', err);
            }
        });
    });
});

// Add analytics tracking (replace with your tracking ID)
function gtag(){
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push(arguments);
    }
}

// Track outbound link clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href.startsWith('http') && !e.target.href.includes(window.location.hostname)) {
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                event_category: 'outbound',
                event_label: e.target.href,
                transport_type: 'beacon'
            });
        }
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation class
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.experience-card, .skill-category, .publication-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
