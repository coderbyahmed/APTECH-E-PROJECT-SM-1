// mobile slide menu bar 

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

// this code is to use menu bar sub menu   

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



// THIS CODE IS TO USE USER SEARCH CARDS INPUT 

document.addEventListener("DOMContentLoaded", function () {

    var searchInput = document.querySelector(".search-form1 input");
    var schoolCards = document.querySelectorAll(".school-card");
    var searchForm = document.querySelector(".search-form1");

    searchInput.addEventListener("keyup", function () {

        var searchValue = searchInput.value.toLowerCase().trim();

        schoolCards.forEach(function (card) {

            var schoolName = card.querySelector(".card-heading h3")
             .textContent
             .toLowerCase();

            if (schoolName.startsWith(searchValue)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });


    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        var searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue.length < 2) return; // At least 2 letters required

        var matchedCard = null;

        schoolCards.forEach(function (card) {

            var schoolName = card.querySelector(".card-heading h3")
             .textContent
             .toLowerCase();

            // Match if name starts with typed text
            if (schoolName.startsWith(searchValue)) {
                matchedCard = card;
            }

        });

        if (matchedCard) {

            var link = matchedCard.querySelector(".card-button a");

            if (link && link.getAttribute("href") !== "") {
                window.location.href = link.getAttribute("href");
            }

        }

        // Clear input
        searchInput.value = "";

    });

});


