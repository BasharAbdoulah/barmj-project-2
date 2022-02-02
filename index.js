// all varibles we need
let burgerIcon = document.querySelector(".is-visible-mobile");
let mainNav = document.querySelector(".main-nav");
let closeIcon = document.querySelector(".close-icon");

//
burgerIcon.addEventListener("click", () => {
  mainNav.classList.add("is-active");

  closeIcon.classList.add("is-active");
});

// remove active class from nav and close icon
closeIcon.addEventListener("click", () => {
  mainNav.classList.remove("is-active");
  closeIcon.classList.remove("is-active");
});
