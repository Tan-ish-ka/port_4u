document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    features.forEach((feature) => {
        observer.observe(feature);
    });
});