document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");
    const mainContent = document.getElementById("main-content");

    document.querySelector(".btn-outline-light").addEventListener("click", (e) => {
        e.preventDefault();
        mainContent.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollPosition < heroHeight) {
            heroSection.style.opacity = 1;
        } else {
            heroSection.style.opacity = 0;
        }
    });
});
