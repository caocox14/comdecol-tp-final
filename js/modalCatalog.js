document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModalBtn = document.getElementById("close-modal");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let images = Array.from(document.querySelectorAll("img[data-src]"));
  let currentIndex = 0;

  function openModal(src, index) {
    modalImage.src = src;
    modal.classList.remove("hidden");
    currentIndex = index;
  }

  function closeModal() {
    modal.classList.add("hidden");
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

  // Botones para escritorio
  closeModalBtn?.addEventListener("click", closeModal);
  prevBtn?.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn?.addEventListener("click", () => showImage(currentIndex + 1));

  // Cierre tocando fuera en móviles
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
