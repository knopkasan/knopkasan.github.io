window.addEventListener("DOMContentLoaded", () => {
  "use strict";
//HEADER
  let header = document.querySelector("header"),
      logo = document.querySelector("#logo");

  window.onscroll = () => {
      showHeader();
  };

  function showHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = "#3d1413";
      logo.style.opacity = "1";
    } else {
      header.style.backgroundColor = "";
      logo.style.opacity = "0";
    }
  };
//SLIDER
  let slideIndex = 1,
  slides = document.querySelectorAll(".deck"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
  };

  function plusSlides(n) {
  showSlides(slideIndex += n);
  };

  prev.addEventListener ("click", () => {
  plusSlides(-1);
  });
  next.addEventListener("click", () => {
  plusSlides(1);
  });
});