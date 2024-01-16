/**
 * main.js
 * @description - this is the main js file that is constant in every page.
 */

// t gets the theme item that is set by the user, but by default is set to default.
let t = localStorage.getItem("t") || "default";
// then it sets the theme of the page dependent on the value of t.
document.body.setAttribute("t", t);
/**
 * The random games function
 * @description - when clicked will take the user to a random game on the website.
 */
function RandomGame() {
    fetch("/assets/json/gs.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            rg(data);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the rg function
     * @description - It takes the data from gs.json and helps send the user to the randomly chosen game.
     * @param {*} data - the data that is being passed through.
     */
    function rg(data) {
        // rand takes the data length and generates a random number from said data length
        // example: if the length is 690, then it would put out any number between 1-690
        let rand = Math.floor(Math.random() * (data.length + 1));
        // then it sends the user to the id of the random value that is generated from rand.
        location.href =
            "/go.html?id=" + data[rand].id;
    }

}

/**
 * This is the 1st easter egg on the site.
 * This is the freep0rn function
 * @description - if entered in the console, will change the theme into the "clown" theme. With a greeting from Oli The Cop
 * I made this because of the unbelievable amount of horny bastards that wanted me to put porn onto the site, that will never happen.
 */
function freep0rn() {
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

/**
 * This is the 2nd easter egg on the site.
 * This is the luma function
 * @description - if entered in the console, will change the theme to the "luma" theme and a brief history of the site.
 * Luma used to be the original name of the site, so I wanted to dedicate a neat easter egg to pay homage to the start of the site.
 */
function luma() {
    localStorage.setItem("t", "luma");
    document.body.setAttribute("t", "luma");
    document.body.style = "";
    localStorage.removeItem("theme_color");
    console.log("%cHISTORY!:", "color: white; font-size:36px;")
    console.log("%cLUMA was the code name for a project that I was working on during my last year in high school at the start of 2022. Didn't have much purpose but to test out how url values could affect the values shown on the page. This project would later become what is known now as imadejptr.", "color: pink; font-size:24px;");
    console.log("%cThis theme was made to pay homage to the original goal of the website and how it changed from what it was then and what it is now. The website is still up on https://jptr.glitch.me", "color: lightgreen; font-size:24px;")
}

/**
 * This is one of three json fetchers.
 * These three functions represent the newest games, best games and players choice.
 * Bobbo, Coopie, and Chirpy represent my cats from past and present, so theres that.
 * The if statement below checks to see if the body of the html page contains "cats", if so then the functions would run.
 * This is done so that there isn't a huge amount of errors because of it not being used in other pages.
 */
if (document.body.classList.contains("cats")) {
    const bobbo = fetch("/assets/json/twothree.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (bobbo) {
            hot(bobbo);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the hot function
     * @description - this is the function that displays the hottest/best games on the website.
     * @param {*} bobbo - represents the data being passed through
     */
    function hot(bobbo) {
        let hotG = document.getElementById("hot");
        // originally it would be 15, but for this special update it will 30.
        for (let i = 0; i < 100; i++) {
            let div = document.createElement("li");
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

    const coopie = fetch("/assets/json/gs.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (coopie) {
            news(coopie);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the new games function
     * @description - this function displays the newest games that are added to the website.
     * @param {*} coopie - represents the data being passed through
     */

    function news(coopie) {
        coopie.sort(function (a, b) {
            return b.id - a.id
        })
        let newG = document.getElementById("new");
        for (let i = 0; i < 15; i++) {
            let div = document.createElement("li");
            if (coopie[i].new == "true") {
                div.className = "new-class";
                div.innerHTML =
                    "<a href=/go.html?id=" +
                    coopie[i].id +
                    ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                    coopie[i].id +
                    '.' +
                    coopie[i].img +
                    '" data-loaded="true"><div class="badge">' +
                    coopie[i].badge +
                    '</div><div class="new-badge">NEW!' +
                    '</div><span class="box-title">' +
                    coopie[i].name +
                    "</span></a>";
                newG.appendChild(div);
            } else {
                div.innerHTML =
                    "<a href=/go.html?id=" +
                    coopie[i].id +
                    ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                    coopie[i].id +
                    '.' +
                    coopie[i].img +
                    '" data-loaded="true"><div class="badge">' +
                    coopie[i].badge +
                    '</div><span class="box-title">' +
                    coopie[i].name +
                    "</span></a>";
                newG.appendChild(div);
            }
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
    /**
     * This is the players choice function
     * @description - this function displays whatever games that the chosen discord user plays on imadejptr.
     * if YOU 🫵 want to show off your favorite games, hate to plug in a js doc but 👉 https://dsc.gg/imj
     * @param {*} chirpy - represents the data being passed through
     */
    function pc(chirpy) {
        let pcG = document.getElementById("pc");
        for (let i = 0; i <= chirpy.length; i++) {
            let div = document.createElement("li");
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
} else {
    console.log("no cats :(") // this only displays if the page doesn't contain cats.
}


let slideIndex = 1;
let myTimer;
let slideshowContainer;

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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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