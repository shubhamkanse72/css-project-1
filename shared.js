var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
backdrop.addEventListener("click", function () {
  //mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}
toggleButton.addEventListener("click", function () {
  //backdrop.style.display = "block";
  // mobileNav.style.display = "block";
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
