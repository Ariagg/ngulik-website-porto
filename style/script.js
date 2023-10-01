// const toggleButton = document.getElementsByClassName('hamburger--collapse')[0]
// const navbarLink = document.getElementsByClassName('navbar-link')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLink.classList.toggle('active')
// })

  // Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var navbarLink = document.getElementsByClassName('navbar-link')[0]

 // On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
    navbarLink.classList.toggle('active');
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu

});