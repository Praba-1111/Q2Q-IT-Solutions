// Q2Q IT Solutions Global Script

document.addEventListener("DOMContentLoaded", () => {
    // Add a simple scroll effect to the header
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            header.style.padding = "1rem 5%";
        } else {
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
            header.style.padding = "1.5rem 5%";
        }
    });
    
    // Add transition to header for smooth resize
    header.style.transition = "all 0.3s ease";
});
