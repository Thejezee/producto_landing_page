window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '0.5rem 0';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '1rem 0';
    }
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .journey-card').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.pageYOffset;
    parallax.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const text = document.querySelector('.animated-text');
if (text) {
    text.innerHTML = text.textContent.split('').map(
        letter => `<span style="display: inline-block">${letter}</span>`
    ).join('');

    document.querySelectorAll('.animated-text span').forEach((span, idx) => {
        span.style.animation = `fadeInUp 0.5s ease forwards ${idx * 0.1}s`;
    });
}

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
      
        const productName = this.querySelector('h3').textContent;
        console.log(`Clicked on ${productName}`);
    });
});