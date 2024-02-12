var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}
modalNoButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", function () {
  mobileNav.style.display = "none";
  closeModal();
});

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
toggleButton.addEventListener("click", function () {
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
});
