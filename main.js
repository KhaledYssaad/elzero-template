let navButt = document.querySelector("#other-links"),
  menu = document.querySelector("#big-menu"),
  upButton = document.querySelector("#up-scroll");

navButt.onclick = function (event) {
  if (menu.style.opacity === "1") {
    menu.style.cssText = `
      opacity: 0;
      display: none;`;
  } else {
    menu.style.cssText = `
      opacity: 1;
      display: flex;`;
  }
};

// Hide the menu if clicking outside of it
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !navButt.contains(event.target)) {
    menu.style.cssText = `
      opacity: 0;
      display: none;`;
  }
});

upButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (window.scrollY >= 600) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
};
