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
      grid.classList.remove(targetLayout);
      cells.forEach((c) => {
        c.classList.remove("grid-cell-active");

        const innerC = c.querySelector(".grid-inner-cell");
        if (innerC) innerC.classList.remove("grid-inner-cell-active");
      });
    } else {
      grid.classList.remove("layout-1", "layout-2", "layout-3", "layout-4");
      cells.forEach((c) => {
        c.classList.remove("grid-cell-active");

        const innerC = c.querySelector(".grid-inner-cell");
        if (innerC) innerC.classList.remove("grid-inner-cell-active");
      });

      grid.classList.add(targetLayout);
      cell.classList.add("grid-cell-active");

      if (innerCell) innerCell.classList.add("grid-inner-cell-active");
    }
  });
});

async function copyEmail() {
  const box = document.querySelector(".contact-nav");
  const icon = document.querySelector(".copyIcon");

  try {
    await navigator.clipboard.writeText("iletisim@erdemkoyuncu.com");
    icon.innerHTML = `<polyline points="20,6 9,17 4,12"></polyline>`;

    box.classList.add("copied");

    setTimeout(() => {
      icon.innerHTML = `
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    `;

      box.classList.remove("copied");
    }, 2000);
  } catch {}
}
