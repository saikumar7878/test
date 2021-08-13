$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 620) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // scroll top
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // hamburger
  $(".btn-menu").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".btn-menu i").toggleClass("active");
    $("html").toggleClass("active");
    $(".scroll-up-btn").toggleClass("menu-open-none");
  });
  // close if press ESC button
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      $(".navbar .menu").removeClass("active");
      $(".btn-menu i").removeClass("active");
      $("html").removeClass("active");
      $(".scroll-up-btn").removeClass("menu-open-none");
    }
  });
  // close if clicks on window
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".fa-bars")) {
      if (!event.target.matches(".menu")) {
        if (!event.target.matches(".nav-item")) {
          var menuModal = document.getElementsByClassName("menu");
          var i;
          for (i = 0; i < menuModal.length; i++) {
            var openMenu = menuModal[i];
            if (openMenu.classList.contains("menu")) {
              // openMenu.classList.remove("show");
              $(".navbar .menu").removeClass("active");
              $(".btn-menu i").removeClass("active");
              $("html").removeClass("active");
              $(".scroll-up-btn").removeClass("menu-open-none");
            }
          }
        }
      }
    }
  };
  $(".navbar-click").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".btn-menu i").toggleClass("active");
    $("html").toggleClass("active");
    $(".scroll-up-btn").toggleClass("menu-open-none");
  });
  var typed = new Typed(".typing", {
    strings: ["ISO Certification", "Products Certification", "Training"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // services changing
  $("#iso_ser").click(function () {
    $("#iso_ser").addClass("active");
    $("#product_ser").removeClass("active");
    $("#training_ser").removeClass("active");

    $(".iso_certificate").addClass("block_class");
    $(".product_certificate").removeClass("block_class");
    $(".training_certificate").removeClass("block_class");
  });
  $("#product_ser").click(function () {
    $("#iso_ser").removeClass("active");
    $("#product_ser").addClass("active");
    $("#training_ser").removeClass("active");

    $(".iso_certificate").removeClass("block_class");
    $(".product_certificate").addClass("block_class");
    $(".training_certificate").removeClass("block_class");
  });
  $("#training_ser").click(function () {
    $("#iso_ser").removeClass("active");
    $("#product_ser").removeClass("active");
    $("#training_ser").addClass("active");

    $(".iso_certificate").removeClass("block_class");
    $(".product_certificate").removeClass("block_class");
    $(".training_certificate").addClass("block_class");
  });
});
//slideshow js starts
var imageSlides = document.getElementsByClassName("imageSlides");
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove("visible");
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  currentImage.classList.add("visible");
  counter++;
}

// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    hideImages();
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 2900);
//slideshow js ends
