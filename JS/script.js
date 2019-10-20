let header = document.querySelector("header"),
    footer = document.querySelector("footer"),
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