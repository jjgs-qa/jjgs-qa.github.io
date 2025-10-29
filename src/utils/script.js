// JJG: Script para Portafolio de QA
document.addEventListener("DOMContentLoaded", () => {
  // JJG: Lógica del Selector de Tema
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  // Por defecto es 'dark'. Solo cambiamos si está guardado como 'light'.
  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggle.checked = false;
  } else {
    body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      // Activar modo oscuro
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      // Activar modo claro
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // JJG: Lógica del Menú Hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("header nav");
  const hamburgerIcon = hamburger.querySelector("i");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("nav-active");

      if (navMenu.classList.contains("nav-active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
      } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
      }
    });
  }

  document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("nav-active")) {
        navMenu.classList.remove("nav-active");
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
      }
    });
  });

  // JJG: Lógica de Modales (Sin cambios)
  const projectButtons = document.querySelectorAll(".project-btn");
  const closeButtons = document.querySelectorAll(".modal-close");
  const modalBackdrops = document.querySelectorAll(".modal-backdrop");

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalTarget = button.getAttribute("data-modal-target");
      const modal = document.querySelector(modalTarget);
      if (modal) {
        modal.classList.add("modal-active");
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-backdrop");
      if (modal) {
        modal.classList.remove("modal-active");
      }
    });
  });

  modalBackdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        backdrop.classList.remove("modal-active");
      }
    });
  });

  // JJG: Efecto de Máquina de Escribir (Tagline más QA)
  const taglineEl = document.getElementById("tagline-terminal");
  const textToType = "$ Iniciando casos de prueba... [EJECUTANDO]";
  let i = 0;

  function typewriterEffect() {
    if (i < textToType.length) {
      taglineEl.innerHTML += textToType.charAt(i);
      i++;
      setTimeout(typewriterEffect, 80); // Velocidad de tipeo
    }
  }

  // Iniciar efecto después de una breve pausa
  setTimeout(typewriterEffect, 500);
}); // Fin de DOMContentLoaded
