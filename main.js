//header start

let navButt = document.querySelector("#other-links"),
  menu = document.querySelector("#big-menu");

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

//header end
// events start

let days = document.querySelector("#days"),
  hours = document.querySelector("#hours"),
  minuts = document.querySelector("#minuts"),
  seconds = document.querySelector("#seconds"),
  currentMonth = new Date().getMonth(),
  wanteddate = new Date(`${currentMonth + 2}/01/2024`);

function countDown() {
  let currentTime = new Date();
  let diff = wanteddate - currentTime;

  if (diff <= 0) {
    // If the countdown is finished, clear the interval
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minuts.innerHTML = "00";
    seconds.innerHTML = "00";
    clearInterval(countdownInterval);
    return;
  }

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minuts.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

let countdownInterval = setInterval(countDown, 1000);

countDown();

// events end

// skills start
let section = document.querySelector(".skills"),
  progressSpans = document.querySelectorAll(".bar span");

function progressFun() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= section.offsetTop) {
      progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
  });
}

progressFun();

//skills end

// stats start

let statSection = document.querySelector("#stats"),
  stats = document.querySelectorAll(".stat h2");

function statFun() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= statSection.offsetTop - window.innerHeight) {
      stats.forEach((stat) => {
        let goal = parseInt(stat.dataset.stat);
        let current = parseInt(stat.innerHTML) || 0;

        let count = setInterval(() => {
          if (current < goal) {
            current++;
            stat.innerHTML = current;
          } else {
            clearInterval(count);
          }
        }, 1000 / goal);
      });
    }
  });
}

statFun();

// stats end

// up button start
let upButton = document.querySelector("#up-scroll");

function upButtonFun() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  });
}

upButtonFun();

upButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//up button end
