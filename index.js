var menuButton = document.getElementById("menu-btn");
var sideNav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

menuButton.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "/images/s.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/main-menu.png";
  }
};

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
