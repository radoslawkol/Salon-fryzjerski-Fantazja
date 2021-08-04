const nav__white = document.querySelector(".nav__white");
const navigation = document.querySelector(".navigation");
const toggleBtn = document.querySelector("#toggleBtn");
const transformedElements = document.querySelectorAll(".nav");
const goUppBtn = document.querySelector(".goUpBtn");
const header = document.querySelector(".header");

// NAVIGATION  TOGGLE
toggleBtn.addEventListener("click", () => {
  transformedElements.forEach((el) => el.classList.toggle("visible"));
  document.querySelector("body").style.overflow = "hidden";
  if (!toggleBtn.classList.contains("fa-times")) {
    setTimeout(() => {
      toggleBtn.className = "navigation__toggleBtn fas fa-times";
    }, 600);
  } else {
    document.querySelector("body").style.overflow = "visible";
    toggleBtn.className = "navigation__toggleBtn fas fa-bars";
  }
});

window.addEventListener("scroll", () => {
  nav__white.style.top = `${navigation.clientHeight - window.scrollY}px`;
  if (scrollY > header.clientHeight) {
    goUppBtn.style.display = "block";
  } else {
    goUppBtn.style.display = "none";
  }

  // NAVIGATION fixed
  if (scrollY > nav__white.clientHeight) {
    transformedElements.forEach((el) => el.classList.remove("visible"));
    toggleBtn.className = "navigation__toggleBtn fas fa-bars";
    document.querySelector("body").style.overflow = "visible";
  }
});

window.addEventListener("hashchange", () => {
  document.querySelector("body").style.overflow = "visible";
  transformedElements.forEach((el) => el.classList.remove("visible"));
  toggleBtn.className = "navigation__toggleBtn fas fa-bars";
});

// Show more photos

const showMoreBtn = document.querySelector("#showMoreBtn");
const galleryContainerAdditinal = document.querySelector(
  ".gallery__container--additional"
);
const galleryContainer = document.querySelector(".gallery__container");

showMoreBtn.addEventListener("click", () => {
  galleryContainerAdditinal.classList.toggle("show");
  galleryContainer.insertAdjacentElement("beforeend", showMoreBtn);
  if (galleryContainerAdditinal.classList.contains("show")) {
    showMoreBtn.textContent = `Pokaż mniej \u2191`;
  } else {
    showMoreBtn.textContent = "Pokaż więcej \u2193";
    galleryContainer.scrollIntoView();
  }
});
