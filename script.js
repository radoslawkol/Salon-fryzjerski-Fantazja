const toggleBtn = document.querySelector("#toggleBtn");
const transformedElements = document.querySelectorAll(".nav");

// NAVIGATION  TOGGLE
toggleBtn.addEventListener("click", () => {
  transformedElements.forEach((el) => el.classList.toggle("visible"));
  if (!toggleBtn.classList.contains("fa-times")) {
    setTimeout(() => {
      toggleBtn.className = "navigation__toggleBtn fas fa-times";
    }, 600);
  } else {
    toggleBtn.className = "navigation__toggleBtn fas fa-bars";
  }
});
