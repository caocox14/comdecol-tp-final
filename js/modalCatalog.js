document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModalBtn = document.getElementById("close-modal");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let images = Array.from(document.querySelectorAll("img[data-src]"));
  let currentIndex = 0;
  let modalOpen = false;

  function openModal(src, index) {
    modalImage.src = src;
    modal.classList.remove("hidden");
    currentIndex = index;
    modalOpen = true;

    // Empuja un nuevo estado al historial para interceptar el botón "atrás"
    history.pushState({ modal: true }, null, "");
  }

  function closeModal() {
    if (modalOpen) {
      modal.classList.add("hidden");
      modalOpen = false;

      // Retrocede el historial solo si fue modificado
      if (history.state && history.state.modal) {
        history.back();
      }
    }
  }

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      modalImage.src = images[index].dataset.src;
      currentIndex = index;
    }
  }

  // Asigna evento click a cada imagen del catálogo
  images.forEach((img, i) => {
    img.addEventListener("click", () => {
      openModal(img.dataset.src, i);
    });
  });

  closeModalBtn?.addEventListener("click", closeModal);
  prevBtn?.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn?.addEventListener("click", () => showImage(currentIndex + 1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Escucha el evento popstate (cuando el usuario presiona "atrás")
  window.addEventListener("popstate", () => {
    if (modalOpen) {
      closeModal();
    }
  });
});
