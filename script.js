const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeToggleLabel = document.querySelector("[data-theme-toggle-label]");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (themeToggleLabel) {
    themeToggleLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  } else if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  }
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll(".reveal");
if (revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 },
  );

  revealNodes.forEach((node) => {
    if (!node.classList.contains("visible")) {
      observer.observe(node);
    }
  });
}

const lightbox = document.querySelector("[data-lightbox]");
if (lightbox) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");
  const cards = document.querySelectorAll(".photo-card");
  const photos = document.querySelectorAll(".photo-card img");

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lightboxImage) {
      lightboxImage.setAttribute("src", "");
      lightboxImage.setAttribute("alt", "Expanded photograph");
    }
  };

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Open photo");
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const image = card.querySelector("img");
        if (image) {
          image.click();
        }
      }
    });
  });

  photos.forEach((photo) => {
    photo.addEventListener("click", () => {
      if (!lightboxImage) {
        return;
      }
      lightboxImage.setAttribute("src", photo.currentSrc || photo.src);
      lightboxImage.setAttribute("alt", photo.alt || "Expanded photograph");
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}
