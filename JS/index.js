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



// THIS CODE IS TO USE NUMBRINING HOME PAGE SECTION

  var counters = document.querySelectorAll(".counter");

var startCounter = (counter) => {
  var target = +counter.getAttribute("data-target");
  var count = 0;

  var increment = target / 200; 

  var updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);
    } else {
      counter.innerText = target;
      clearInterval(interval);
    }
  };

  var interval = setInterval(updateCounter, 15);
};


var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5
});


counters.forEach(counter => {
  observer.observe(counter);
});


// THIIS CODE IS TO USE AOS ANIMATION FOR SCROLLING HERO SECTION 
document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector(".hero-section");

    setTimeout(() => {
        heroSection.classList.add("loaded");
    }, 500);
});


// THIS CODE IS TO USE AOS ANIMATION FOR SCROLLING ABOUT SECTION
document.addEventListener("DOMContentLoaded", function() {

  const aboutContainer = document.querySelector(".about-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutContainer.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutContainer);

});


// THIS CODE IS TO USE AOS ANIMATION FOR SCROLLING SCHOOL CATEGORY SECTION 

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".school-category-card");

  // Observer options
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.3 // jab 30% section viewport me dikhai de
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("animate"); // animation start
        observer.unobserve(entry.target); // once animated, no need to observe again
      }
    });
  }, options);

  cards.forEach(card => {
    observer.observe(card);
  });
});



// THIS CODE IS TO USE AOS ANIMATION FOR SCROLLING HOW IT WORKS, FACILITY AND TESTIMONIALS SECTION

document.addEventListener("DOMContentLoaded", function () {

  const animatedSections = document.querySelectorAll(
    ".how-it-works, .facility-section, .testimonials"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const elements = entry.target.querySelectorAll(
          ".step-card, .facility-card, .testimonial-card"
        );

        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("animate");
          }, index * 150);
        });

        obs.unobserve(entry.target);
      }

    });
  }, {
    threshold: 0.1,           // mobile ke liye low threshold
    rootMargin: "0px 0px -50px 0px" // thoda pehle trigger
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });

});

elements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add("animate");
  }, index * 250);
});