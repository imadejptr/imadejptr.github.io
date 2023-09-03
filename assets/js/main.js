var t = localStorage.getItem("t") || "default";
let themes;

fetch("/assets/json/themes.json")
  .then((res) => res.json())
  .then((data_themes) => {
    themes = data_themes;

    if (t !== "custom") {
      document.body.setAttribute("t", t);

      if (location.pathname.includes("/settings")) {
        themes.forEach((palette) => {
          if (palette.t == t) {
            console.log(palette.t);
          }
        });
      }
    }
  })
  .catch((e) => {
    console.error(e);
    throw new Error("Failed to load themes");
  });

function RandomGame() {
  fetch("/assets/json/gs.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function appendData(data) {
    let rand = Math.floor(Math.random() * (data.length + 1));
    location.href =
      "/go.html?id=" + data[rand].id;
  }

}

fetch("/assets/json/systems.json")
  .then((res) => res.json())
  .then((data_systems) => {
    sys = data_systems;
    let systems = document.getElementById("systems");
    for (let i = 0; i < sys.length; i++) {
      let div = document.createElement("div");
      div.classList = "partners partners-container";
      div.innerHTML = '<a href="/' + sys[i].url + '"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' + sys[i].img + '-sys.png" style="width: 100%;"><div class="partners-overlay"><div class="partners-text"><b>' + sys[i].name + '</b>: ' + sys[i].desc + '</div></div><br></a><br></div>'
      systems.appendChild(div);
    }
  })

function freeporn() {
  localStorage.setItem("t", "clown");
  document.body.setAttribute("t", "clown");
  document.body.style = "";
  localStorage.removeItem("theme_color");
  console.log("                                                                \n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                      \n░░░░░░          ▒▒▒▒▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒                  \n░░░░░░░░░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒                \n░░░░░░░░░░░░  ░░  ▒▒▒▒░░░░░░░░░░░░░░░░░░▒▒▒▒                  \n░░░░░░░░░░░░░░░░    ░░██████████████████░░                    \n░░░░░░░░░░░░░░░░  ░░██████████████████████░░                  \n░░░░░░░░░░░░░░    ░░░░░░██████████████░░░░░░                  \n░░░░░░░░░░░░░░░░  ░░░░▒▒░░▒▒░░░░░░▒▒░░▒▒░░░░                  \n░░░░░░░░░░░░░░░░    ░░░░▒▒░░▒▒▒▒▒▒░░▒▒░░░░                    \n░░░░░░░░░░░░▒▒▒▒▒▒  ░░▒▒░░░░░░░░░░░░░░▒▒░░▒▒▒▒▒▒▒▒▒▒          \n░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    \n  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒░░▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  \n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    \n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒      \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████  \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████\n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████\n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████  \n      ▒▒██████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████████▒▒        \n      ██████████████████        ████████████████████        \n      ██████████████████        ████████████████████        \n      ██████████████████        ████████████████████        \n    ██████████████████            ████████████████████      \n  ████████████████████            ██████████████████████    \n                                                            ");
  console.log("%cWEE WOO WEE WOO, YOUR UNDER ARREST!", "font-size:36px;color: red");
  console.log("%cSir, I must send you to the gulag. You are being charged for the amount of dumb and awful decisions you just made.", "color: white");
  console.log("%cNow I can't arrest you right now because I'm currently on break and this is my me time.", "color: white");
  console.log("%cSo as punishment for the time being, your theme will be what YOU ARE.", "color: white");
  console.log("%cstop requesting p0rn you feens, or else oli will arrest ya! :<", "font-size:10px;")
}

function luma() {
  localStorage.setItem("t", "luma");
  document.body.setAttribute("t", "luma");
  document.body.style = "";
  localStorage.removeItem("theme_color");
  console.log("%cHISTORY!:", "color: white; font-size:36px;")
  console.log("%cLUMA was the code name for a project that I was working on during my last year in high school at the start of 2022. Didn't have much purpose but to test out how url values could affect the values shown on the page. This project would later become what is known now as imadejptr.", "color: pink; font-size:24px;");
  console.log("%cThis theme was made to pay homage to the original goal of the website and how it changed from what it was then and what it is now. The website is still up on https://jptr.glitch.me", "color: lightgreen; font-size:24px;")
}

const bobbo = fetch("/assets/json/hot.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (bobbo) {
    hot(bobbo);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function hot(bobbo) {
  let hotG = document.getElementById("hot");
  for (var i = 0; i <= bobbo.length; i++) {
    var div = document.createElement("li");
    div.innerHTML =
      "<a href=/go.html?id=" +
      bobbo[i].id +
      ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
      bobbo[i].id +
      '.' +
      bobbo[i].img +
      '" data-loaded="true"><div class="badge">' +
      bobbo[i].badge +
      '</div><span class="box-title">' +
      bobbo[i].name +
      "</span></a>";
    hotG.appendChild(div);
  }
}

const coopy = fetch("/assets/json/news.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (coopy) {
    news(coopy);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function news(coopy) {
  coopy.sort(function (a, b) {
    a = a.id.toLowerCase();
    b = b.id.toLowerCase();

    return a > b ? -1 : a < b ? 1 : 0;
  });
  let newG = document.getElementById("new");
  for (var i = 0; i <= coopy.length; i++) {
    var div = document.createElement("li");
    div.innerHTML =
      "<a href=/go.html?id=" +
      coopy[i].id +
      ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
      coopy[i].id +
      '.' +
      coopy[i].img +
      '" data-loaded="true"><div class="badge">' +
      coopy[i].badge +
      '</div><span class="box-title">' +
      coopy[i].name +
      "</span></a>";
    newG.appendChild(div);
  }
}

const chirpy = fetch("/assets/json/pc.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (chirpy) {
    pc(chirpy);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function pc(chirpy) {
  let pcG = document.getElementById("pc");
  for (var i = 0; i <= chirpy.length; i++) {
    var div = document.createElement("li");
    div.innerHTML =
      "<a href=/go.html?id=" +
      chirpy[i].id +
      ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
      chirpy[i].id +
      '.' +
      chirpy[i].img +
      '" data-loaded="true"><div class="badge">' +
      chirpy[i].badge +
      '</div><span class="box-title">' +
      chirpy[i].name +
      "</span></a>";
    pcG.appendChild(div);
  }
}

const fade = document.querySelector('.f');
const cb1 = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io1 = new IntersectionObserver(cb1);
io1.observe(fade);

const fade2 = document.querySelector('.f2');
const cb2 = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(fade2);

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1)
  }, 4000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2)
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1)
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1)
  }, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex)
  }, 4000);
}
