// this code is to use menu bar 

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

// THIS CODE IS TO USE MENU BAR SUB MENU 

var featureToggle = document.getElementById("mobileFeatureToggle");
var featurePanel = document.getElementById("featurePanel");
var backBtn = document.getElementById("backToMenu");

featureToggle.addEventListener("click", function(e){
  e.preventDefault();
  featurePanel.classList.add("active");
});

backBtn.addEventListener("click", function(){
  featurePanel.classList.remove("active");
});


// this code is use form validation 

document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("contactForm");

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

document.addEventListener("DOMContentLoaded", function () {

    var btn = document.getElementById("getLocationBtn");

    btn.addEventListener("click", function () {

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {

                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                // Show coordinates
                document.getElementById("latitude").textContent =
                    "Latitude: " + lat.toFixed(6);

                document.getElementById("longitude").textContent =
                    "Longitude: " + lon.toFixed(6);

                // Create Map
                var map = L.map("liveMap").setView([lat, lon], 15);

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
            function () {
                alert("Unable to retrieve your location.");
            }
        );

    });

});
