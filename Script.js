// Message de bienvenue
window.addEventListener("load", () => {
    console.log("Bienvenue sur CheryTech !");
});

// Boutons Acheter
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        window.open("https://wa.me/18090000000", "_blank");
    });
});

// Défilement fluide
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const cible = document.querySelector(this.getAttribute("href"));

        cible.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animation des cartes
const cartes = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cartes.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);
});
