const nav__white = document.querySelector(".nav__white");
const navigation = document.querySelector(".navigation");
const toggleBtn = document.querySelector("#toggleBtn");
const transformedElements = document.querySelectorAll(".nav");

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

// NAVIGATION fixed
window.addEventListener("scroll", () => {
  nav__white.style.top = `${navigation.clientHeight - window.scrollY}px`;

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
