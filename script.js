document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Toggler ---
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    }
  });

  // --- Mouse Follower Decor ---
  const follower = document.querySelector(".mouse-follower");
  window.addEventListener("mousemove", (e) => {
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
  });
  const hoverElements = document.querySelectorAll("a, button");
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => follower.classList.add("active"));
    el.addEventListener("mouseleave", () =>
      follower.classList.remove("active")
    );
  });

  // --- PARTICLE NETWORK BACKGROUND EFFECT ---
  if (document.getElementById("particles-canvas")) {
    tsParticles.load("particles-canvas", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#00d9ff", // Color of the particles/dots
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#8a4dd4", // Color of the connecting lines
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "grab", // Mouse hover effect
          },
          onclick: {
            enable: true,
            mode: "push", // Mouse click effect
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_opacity: 1,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // --- AOS (Animate On Scroll) Initialization ---
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 100, // Offset (in px) from the original trigger point
  });
});
