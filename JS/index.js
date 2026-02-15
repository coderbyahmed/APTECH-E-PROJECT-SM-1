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


// counter efect dala hai 

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