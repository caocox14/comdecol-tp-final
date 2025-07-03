document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const bars = menuBtn?.querySelectorAll('span');
  let open = false;

  if (menuBtn && mobileMenu && bars.length === 3) {
    menuBtn.addEventListener('click', () => {
      open = !open;

      // Mostrar/Ocultar menú móvil
      if (open) {
        mobileMenu.classList.remove('hidden');
        void mobileMenu.offsetWidth;
        mobileMenu.classList.remove('opacity-0', '-translate-y-4');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
      } else {
        mobileMenu.classList.add('opacity-0', '-translate-y-4');
        mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }

      // Animación hamburguesa <-> X
      bars[0].classList.toggle('rotate-45');
      bars[0].classList.toggle('translate-y-1.5');
      bars[1].classList.toggle('opacity-0');
      bars[2].classList.toggle('-rotate-45');
      bars[2].classList.toggle('-translate-y-1.5');
    });
  }
});
