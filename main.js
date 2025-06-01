function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

document.getElementById("mobileMenu").addEventListener("click", function (e) {
  if (e.target === this || e.target.classList.contains("mobile-menu-close")) {
    toggleMobileMenu();
  }

  if (!e.target.closest(".mobile-menu-content a")) {
    toggleMobileMenu();
  }
});

const grid = document.querySelector(".grid");
const cells = document.querySelectorAll("[data-layout]");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const targetLayout = cell.dataset.layout;

    if (grid.classList.contains(targetLayout)) {
      grid.classList.remove(targetLayout);
    } else {
      grid.classList.remove("layout-1", "layout-2", "layout-3", "layout-4");

      grid.classList.add(targetLayout);
    }
  });
});
