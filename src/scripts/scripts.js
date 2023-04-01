// loader function

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader")
  })
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

// mega menu 
function megaMenu() {
  var element = document.getElementById("mega-menu");
  element.classList.toggle("mega-menu--show");
  var element = document.getElementById("mega-menu-icon");
  element.classList.toggle("mega-menu-icon--rotate");
}

const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');


// scroll spy 
$(function () {

  var link = $('#navbar a.dot');

  // Move to specific section when click on menu link
  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function () {
    scrNav();
  });

  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});