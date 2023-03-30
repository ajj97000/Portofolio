// loader function

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader")
  })
})

const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');