document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CERTIFICATE IMAGE MODAL (LIGHTBOX) ---
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModalBtn = document.querySelector(".close-modal");
  const certImages = document.querySelectorAll(".marquee-track img");

  if (modal && modalImg && certImages.length > 0) {
    certImages.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // --- 2. MOBILE MENU (DROPDOWN EXPAND) ---
  const menuTrigger = document.querySelector(".menu-trigger");
  const navMenu = document.querySelector(".nav-links-wrapper");

  if (menuTrigger && navMenu) {
    menuTrigger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const menuIcon = menuTrigger.querySelector("i");
      if (menuIcon) {
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
      }
    });

    // Close menu when any link is clicked & reset icon
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const menuIcon = menuTrigger.querySelector("i");
        if (menuIcon) {
          menuIcon.classList.add("fa-bars");
          menuIcon.classList.remove("fa-times");
        }
      });
    });
  }
});

// As a backup, strictly block drag and drop for images
document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
