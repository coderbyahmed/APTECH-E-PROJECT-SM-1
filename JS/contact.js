// YE CODE IS TO USE MOBILE MENU IN NAVBAR

var burger = document.getElementById("burger"); // mobile menu icon ko select karne ke liye
var mobileMenu = document.getElementById("mobileMenu"); // mobile menu container ko select karne ke liye
var closeMenu = document.getElementById("closeMenu"); // mobile menu close icon ko select karne ke liye

// jab burger icon pe click ho to mobile menu show karo aur body scroll disable karo
burger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

// jab close icon pe click ho to mobile menu hide karo aur body scroll enable karo
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

// YE CODE IS TO USE MOBILE FEATURE PANEL IN NAVBAR  

var featureToggle = document.getElementById("mobileFeatureToggle"); // mobile feature panel toggle button ko select karne ke liye
var featurePanel = document.getElementById("featurePanel"); // mobile feature panel container ko select karne ke liye
var backBtn = document.getElementById("backToMenu"); // mobile feature panel me back button ko select karne ke liye

// jab feature toggle button pe click ho to feature panel show karo

featureToggle.addEventListener("click", function (e) {
  e.preventDefault();
  featurePanel.classList.add("active");
});

// jab back button pe click ho to feature panel hide karo
backBtn.addEventListener("click", function () {
  featurePanel.classList.remove("active");
});


// YE CODE FOR CONTACT PAGE FORM VALIDATION AND SWEET ALERTS

document.addEventListener("DOMContentLoaded", function () { // Ensure the DOM is fully loaded before running the script

  var form = document.getElementById("contactForm"); // Contact form ko select karne ke liye

  // jab form submit ho to validation karo aur sweet alert show karo
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Agar form valid nahi hai
    if (!form.checkValidity()) {

      Swal.fire({
        icon: "error",
        title: "Form Incomplete ❌",
        text: "Please fill all required fields and accept Privacy Policy.",
        timer: 4000,
        showConfirmButton: false
      });
      return;
    }
    // ✅ Agar sab fields filled hain
    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully ✅",
      text: "Thank you for contacting SchoolsInfo!",
      timer: 4000,
      showConfirmButton: false
    });
    form.reset();
  });
});



// THIS CODE IS TO GET USER LOCATION AND SHOW ON MAP

document.addEventListener("DOMContentLoaded", function () { // Ensure the DOM is fully loaded before running the script

  var btn = document.getElementById("getLocationBtn"); // Get Location button ko select karne ke liye

  btn.addEventListener("click", function () { // jab button pe click ho to user location get karo

    // Agar browser geolocation support nahi karta to alert show karo
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    // Agar browser geolocation support karta hai to user location get karo
    navigator.geolocation.getCurrentPosition(
      function (position) {

        var lat = position.coords.latitude; // Latitude ko variable me store karo
        var lon = position.coords.longitude; // Longitude ko variable me store karo

        // Latitude aur Longitude ko page pe show karo
        document.getElementById("latitude").textContent =
          "Latitude: " + lat.toFixed(6);

          // Longitude ko page pe show karo
        document.getElementById("longitude").textContent =
          "Longitude: " + lon.toFixed(6);

        // OpenStreetMap pe user location ko map me show karo
        var map = L.map("liveMap").setView([lat, lon], 15);

        // OpenStreetMap tiles ko map me add karo
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        L.marker([lat, lon])
          .addTo(map)
          .bindPopup("You are here")
          .openPopup();

        btn.disabled = true;
        btn.textContent = "Location Loaded";

      },
      // Agar user location access deny karta hai ya error aata hai to alert show karo
      function () {
        alert("Unable to retrieve your location.");
      }
    );

  });

});
