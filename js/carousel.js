document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!carousel || !prevBtn || !nextBtn) {
    console.warn("Carrusel: elementos no encontrados");
    return;
  }

  const slides = carousel.querySelectorAll("img");
  const total = slides.length;

  if (total === 0) {
    console.warn("Carrusel: no hay imágenes");
    return;
  }

  let index = 0;

  function update() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function goPrev() {
    index = (index - 1 + total) % total;
    update();
  }

  function goNext() {
    index = (index + 1) % total;
    update();
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  });

  // Autoplay suave (opcional)
  let autoPlay = setInterval(goNext, 5000);

  carousel.addEventListener("mouseenter", () => clearInterval(autoPlay));
  carousel.addEventListener("mouseleave", () => {
    autoPlay = setInterval(goNext, 5000);
  });

  update();
});
