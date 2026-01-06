document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("artModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalTechnique = document.getElementById("modalTechnique");
  const modalYear = document.getElementById("modalYear");
  const modalSize = document.getElementById("modalSize");
  const modalDesc = document.getElementById("modalDesc");
  const modalWhatsApp = document.getElementById("modalWhatsApp");

  const WHATSAPP_NUMBER = "573177046601";

  function openModal(data) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    modalImg.src = data.image;
    modalImg.alt = data.title || "Obra";

    modalTitle.textContent = data.title || "";
    modalTechnique.textContent = data.technique || "—";
    modalYear.textContent = data.year || "—";
    modalSize.textContent = data.size || "—";
    modalDesc.textContent = data.description || "";

    const msg = `Hola Alcides, me interesa esta obra: "${data.title}". Técnica: ${data.technique}. Medidas: ${data.size}. ¿Me cuentas precio y tiempo de entrega?`;
    modalWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    // bloquear scroll del body
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Abrir desde tarjetas
  document.querySelectorAll(".art-card").forEach((card) => {
    card.addEventListener("click", () => {
      openModal({
        title: card.dataset.title,
        technique: card.dataset.technique,
        year: card.dataset.year,
        size: card.dataset.size,
        description: card.dataset.description,
        image: card.dataset.image
      });
    });
  });

  // Cerrar
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
