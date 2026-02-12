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

var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone");

function buttonSubmit() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    phoneNumber.value == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Submit Form",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }

  
}

// submitError.onClick("buttonSubmit");
