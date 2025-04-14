document.addEventListener("DOMContentLoaded", () => {
    // Carrusel de imágenes
    const nextImage = document.querySelector(".next");
    const prevImage = document.querySelector(".prev");

    if (nextImage && prevImage) {
        nextImage.addEventListener("click", function () {
            let items = document.querySelectorAll(".item");
            if (items.length > 0) {
                document.querySelector(".slide").appendChild(items[0]);
            }
        });

        prevImage.addEventListener("click", function () {
            let items = document.querySelectorAll(".item");
            if (items.length > 0) {
                document.querySelector(".slide").prepend(items[items.length - 1]);
            }
        });
    }

    // Carrusel de preguntas
    let index = 0;
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-left");
    const nextButton = document.querySelector(".next-right");

    if (carousel && slides.length > 0 && prevButton && nextButton) {
        function nextSlide() {
            index = (index + 1) % slides.length;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);
    }


    // Menú desplegable
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");

    if (toggleBtn && dropDownMenu) {
        toggleBtn.addEventListener("click", () => {
            dropDownMenu.classList.toggle("open");
            const isOpen = dropDownMenu.classList.contains("open");
            toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
            toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
        });

        document.addEventListener("click", (event) => {
            if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
                dropDownMenu.classList.remove("open");
                toggleBtnIcon.classList.remove("fa-xmark");
                toggleBtnIcon.classList.add("fa-bars");
            }
        });
    }

    // Sticky Header
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 50);
        });
    }
});
