const hamburgerBtn = document.getElementById("hamburger");
const close = document.getElementById("btn-close");
const signUpBtn = document.getElementById("sign-up");
const modal = document.getElementById("modal");

hamburgerBtn.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

signUpBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

//Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

//Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);
