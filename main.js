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
    const innerCell = cell.querySelector(".grid-inner-cell");

    if (grid.classList.contains(targetLayout)) {
      // Remove layout and all active classes
      grid.classList.remove(targetLayout);
      cells.forEach((c) => {
        c.classList.remove("grid-cell-active");
        // Remove active class from inner cells too
        const innerC = c.querySelector(".grid-inner-cell");
        if (innerC) innerC.classList.remove("grid-inner-cell-active");
      });
    } else {
      // Clear all layouts and active classes
      grid.classList.remove("layout-1", "layout-2", "layout-3", "layout-4");
      cells.forEach((c) => {
        c.classList.remove("grid-cell-active");
        // Remove active class from all inner cells
        const innerC = c.querySelector(".grid-inner-cell");
        if (innerC) innerC.classList.remove("grid-inner-cell-active");
      });

      // Add new layout and active classes
      grid.classList.add(targetLayout);
      cell.classList.add("grid-cell-active");
      // Add active class to the clicked cell's inner cell
      if (innerCell) innerCell.classList.add("grid-inner-cell-active");
    }
  });
});
