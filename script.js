/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("snapSortTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


/* Toggle */

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "snapSortTheme",
        isDark ? "dark" : "light"
    );

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn?.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after selecting page */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks?.classList.remove("open");

        });

    });


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop?.classList.add("show");

    } else {

        backToTop?.classList.remove("show");

    }

});


backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   PLACEHOLDER LINKS
========================= */

function placeholderLink(event) {

    event.preventDefault();

    alert(
        "Replace this placeholder with your actual project link."
    );

    return false;

}