const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const menuIcon = menuToggle?.querySelector(".material-symbols-outlined");

if (
  menuToggle instanceof HTMLButtonElement &&
  menu instanceof HTMLElement &&
  menuIcon instanceof HTMLElement
) {
  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuIcon.textContent = "menu";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuIcon.textContent = isOpen ? "close" : "menu";
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}
