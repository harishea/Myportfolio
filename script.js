document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE MENU LEFT-SWIPE LOGIC ---
  const menuTrigger = document.querySelector(".menu-trigger");
  const navMenu = document.querySelector(".nav-links-group.left-group");

  if (menuTrigger && navMenu) {
    menuTrigger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const menuIcon = menuTrigger.querySelector("i");
      if (menuIcon) {
        // Toggles between Hamburger and Close icon
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
      }
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  // --- 2. PARTICLE NETWORK BACKGROUND EFFECT ---
  if (document.getElementById("particles-canvas")) {
    tsParticles.load("particles-canvas", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00d9ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        links: {
          enable: true,
          distance: 150,
          color: "#00e5ff", // Set to your brand cyan
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_opacity: 1 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

  // --- 3. AOS (Animate On Scroll) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });
});
