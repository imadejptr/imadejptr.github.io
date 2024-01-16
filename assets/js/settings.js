/**
 * settings.js
 * @description - This is used for the settings page on imadejptr. For customization, about:blank blockers, and more.
 */

// this loads the current theme text to let the user know what theme the user is using.
document.getElementById("t_info").innerHTML = "Current Theme: " + localStorage.getItem("t").toUpperCase();

/**
 * The set theme function
 * @description - this function is responsible for setting the theme to whatever the user selects.
 * @param {String} t - the theme tag name goes in here.
 */
function setTheme(t) {
    localStorage.setItem("t", t); // sets t into the theme local storage
    document.body.setAttribute("t", t); // sets the theme up
    document.body.style = ""; // reset the body style
    document.getElementById("t_info").innerHTML = "Theme Selected: " + t; // updates the selected theme
}

/**
 * The random themes function
 * @description - When activated, will randomly generate a random theme.
 */
function RandomTheme() {
    // it fetches this json file filled with every theme.
    fetch("/assets/json/themes-com.json")
        .then(function (response) {
            // "promise" that returns JSON from file read.
            return response.json();

        })
        .then(function (data) {
            // then we rand comes back, we know how that works thx to RandomGame() in main.js.
            let rand = Math.floor(Math.random() * (data.length + 1));
            // sets the theme using the setTheme function.
            setTheme(data[rand].theme);
            // updates the selected theme text.
            document.getElementById("t_info").innerHTML = "Theme Selected: " + data[rand].theme.toUpperCase();
        })
}

/**
 * orignally this was supposed to be for the original themes that I made for the website
 * but ended up using this for the community made themes.
 * I want you all to know that I love these themes and I'm working (or have finished) a new thememaker.
 * I made this before the update went out, but...yeah
 */

let sel;
let com = document.getElementById("themes-com");
window.onload = (event) => {
    fetch("/assets/json/themes.json")
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            sel = data;
            //console.log(theme);
            // if theres no data, then com would say "There are no current themes rn"
            if (sel == "") {
                com.innerHTML = "There are no current themes rn"
            } else {
                // if there is data, then it will loop this for the amount of themes there are in the json file.
                for (let i = 0; i < sel.length; i++) {
                    com.innerHTML += '<button class="theme-btn" style="background: ' + sel[i].background + '; color: ' + sel[i].color + '" onclick="setTheme(' + "'" + sel[i].theme + "'" + ')">' + sel[i].theme.toUpperCase() + '<br><span class="maker">Made by: ' + sel[i].maker + '</span></button>';
                }
            }
        })
};

/**
 * This is the about:blank function
 * @description - when in action, will send the user to a "about:blank" version of the website.
 */
function ab() {
    let wo = window.open(); // opens a new window
    let url = window.location.href; // gets the url
    let ifr = wo.document.createElement('iframe'); // creates a iframe
    ifr.src = url; // the iframe source (src) is the url that we made two lines ago
    ifr.style.width = "100vw"; // max width of browser window
    ifr.style.height = "100vh"; // max height of browser window
    ifr.style.border = "none"; // no border
    ifr.style.position = "fixed"; // fixed position
    ifr.style.outline = "none"; // no outter line
    ifr.style.inset = "0px"; // 0px so the iframe fills the whole page.
    wo.document.body.appendChild(ifr); // then it's put in the window that we opened at the start of the function.
}

