function addNavItems(modal) {
  const modalContent = modal.querySelector(".modal__content");
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("nav-items");
  modalContent.insertAdjacentElement("beforeend", itemsContainer);

  const navItems = document.querySelectorAll(".nav__items li a");
  navItems.forEach((elem) => {
    const navItem = document.createElement("a");
    navItem.href = elem.href;
    navItem.textContent = elem.textContent;
    navItem.addEventListener("click", () => {
      modal.style.display = "none";
    });

    itemsContainer.insertAdjacentElement("beforeend", navItem);
  });
}

export function initNav() {
  const nav = document.querySelector(".mobile-cross");
  const modal = document.querySelector(".modal");
  const navClose = modal.querySelector(".modal__close");

  addNavItems(modal);

  nav.addEventListener("click", function () {
    modal.style.display = "block";
  });

  navClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
