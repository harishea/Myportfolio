document.addEventListener("DOMContentLoaded", () => {
  // --- 1. SNOWFALL BACKGROUND EFFECT (OPTIMIZED) ---
  // We can enable this on all devices because disabling 'links' removes 90% of the CPU calculations.
  if (document.getElementById("particles-canvas")) {
    tsParticles.load("particles-canvas", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#00ffff"] }, // Pure white snow mixed with slight Aqua glow
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 1.2,
          direction: "bottom", // Falls downwards
          straight: false, // Allows natural drift
          out_mode: "out",
        },
        links: { enable: false }, // Disabling links completely changes this to a lightweight snowfall
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" }, // Repulses snow gently away from the mouse
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }

  // --- 2. CERTIFICATE IMAGE MODAL (LIGHTBOX) ---
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

  // --- 3. MOBILE MENU (Single Clean Listener) ---
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
