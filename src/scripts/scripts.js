// loader function

// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");
//   loader.classList.add("loader-hidden");
//   loader.addEventListener("transitioned", () => {
//     document.body.removeChild("loader")
//     var element = document.getElementById("body");
//     element.classList.toggle("overflow-hidden");
//   })
// })



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// dark mode 
function themeMode() {
  var element = document.getElementById("body");
  element.classList.toggle("dark-mode");
}

// mega menu 
function megaMenu() {
  var element = document.getElementById("mega-menu");
  element.classList.toggle("mega-menu--show");
  var element = document.getElementById("mega-menu-icon");
  element.classList.toggle("mega-menu-icon--rotate");
}

// burger menu

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  var element = document.getElementById("mobile-menu");
  element.classList.toggle("main-header__list--opened");
  var element = document.getElementById("body");
  element.classList.toggle("overflow-hidden");
  var element = document.getElementById("main");
  element.classList.toggle("overflow-hidden");
}