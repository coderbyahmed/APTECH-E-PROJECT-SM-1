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



// THIS CODE IS TO USE USER SEARCH CARDS INPUT 

document.addEventListener("DOMContentLoaded", function () { // Ensure the DOM is fully loaded before running the script

    var searchInput = document.querySelector(".search-form1 input"); // Search input field ko select karne ke liye
    var schoolCards = document.querySelectorAll(".school-card"); // School cards ko select karne ke liye
    var searchForm = document.querySelector(".search-form1"); // Search form ko select karne ke liye
    
    // jab user search input me type kare to school cards ko filter karo
    searchInput.addEventListener("keyup", function () { 

        var searchValue = searchInput.value.toLowerCase().trim(); // User ke input ko lowercase me convert karo aur extra spaces remove karo

        schoolCards.forEach(function (card) { // Har school card ke liye loop chalao 

            var schoolName = card.querySelector(".card-heading h3") // School card ke heading se school name ko select karo
                .textContent
                .toLowerCase();

            if (schoolName.startsWith(searchValue)) { // Agar school name user ke input se start hota hai to card ko show karo
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });


    // jab user search form submit kare to matching school card ke link pe redirect karo
    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        var searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue.length < 2) return; // Agar user ka input 2 characters se kam hai to kuch mat karo

        var matchedCard = null; // Matching school card ko store karne ke liye variable

        // Har school card ke liye loop chalao aur check karo ki school name user ke input se start hota hai ya nahi
        schoolCards.forEach(function (card) {

            var schoolName = card.querySelector(".card-heading h3")
                .textContent
                .toLowerCase();

            // Match if name starts with typed text
            if (schoolName.startsWith(searchValue)) {
                matchedCard = card;
            }

        });

        // Agar matching card milta hai to uske link pe redirect karo
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


