
document.addEventListener("DOMContentLoaded", function () {
  const explodingNav = document.querySelector(".exploding-nav");
  const explodingNavButton = document.querySelector(".exploding-nav-button");

  if (explodingNav && explodingNavButton) {
    explodingNavButton.addEventListener("click", function (e) {
      e.preventDefault();
      explodingNav.classList.toggle("active");
    });
  }
});
