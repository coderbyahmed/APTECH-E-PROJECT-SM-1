
  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobileMenu");
  var closeMenu = document.getElementById("closeMenu");

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });


  document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("contactForm");
    var successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

       
        if (form.checkValidity()) {

            successMessage.style.display = "block";

            form.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 4000);
        }
    });

});
