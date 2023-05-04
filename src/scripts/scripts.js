// animate 
function reveal() {
  var reveals = document.querySelectorAll(".animation-reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animation-active");
    }
  }
}

window.addEventListener("scroll", reveal);

// loader function
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader")
    var element = document.getElementById("body");
    element.classList.toggle("overflow-hidden");
  })
  reveal();
})



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