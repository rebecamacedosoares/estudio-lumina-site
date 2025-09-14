AOS.init({
    duration: 800,
    once: false
});

const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.theme-icon-light');
const moonIcon = document.querySelector('.theme-icon-dark');

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
    localStorage.setItem('theme', theme);
};

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

function setupInfiniteScroller() {
    const scroller = document.querySelector(".team-scroller-inner");
    if (scroller) {
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scroller.appendChild(duplicatedItem);
        });
    }
}

document.addEventListener("DOMContentLoaded", setupInfiniteScroller);

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        if (backToTopButton) backToTopButton.style.display = "flex";
    } else {
        if (backToTopButton) backToTopButton.style.display = "none";
    }
});