var open = document.querySelector("#open");
var close = document.querySelector("#close");
var navbar = document.querySelector("#navbar");

const toggle = (choice) => {
  if (choice === 1) {
    navbar.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
  } else if (choice === 2) {
    navbar.style.display = "flex";
    close.style.display = "block";
    open.style.display = "none";
  }
};

open.addEventListener("click", () => {
  toggle(2);
});
close.addEventListener("click", () => {
  toggle(1);
});
