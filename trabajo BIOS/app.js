const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showPopup();
    form.reset();
  });

  function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function () {
      popup.style.display = "none";
    }, 3000); // El popup se ocultará automáticamente después de 3 segundos (3000 ms)
  }
});
