// settings.js
// purpose: used for customization

document.getElementById("t_info").innerHTML = "Current Theme: " + localStorage.getItem("t").toUpperCase();

// this is used to set the theme up
function setTheme(t) {
    localStorage.setItem("t", t);
    document.body.setAttribute("t", t);
    document.body.style = "";
    localStorage.removeItem("theme_color");
    document.getElementById("t_info").innerHTML = "Theme Selected: " + t;
}

// this generates all the current themes using a json file
function RandomTheme() {
    fetch("/assets/json/themes-com.json")
        .then(function (response) {
            // "promise" that returns JSON from file read
            return response.json();

        })
        .then(function (data) {
            let rand = Math.floor(Math.random() * (data.length + 1));
            setTheme(data[rand].theme);
            document.getElementById("t_info").innerHTML = "Theme Selected: " + data[rand].theme.toUpperCase();
        })
}


let sel;
let mySelect = document.getElementById("themes-com");
window.onload = (event) => {
    fetch("/assets/json/themes.json")
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            sel = data;
            //console.log(theme);
            if (sel == "") {
                mySelect.innerHTML = "There are no current themes rn"
            } else {
                for (let i = 0; i < sel.length; i++) {
                    mySelect.innerHTML += '<button class="theme-btn" style="background: ' + sel[i].background + '; color: ' + sel[i].color + '" onclick="setTheme(' + "'" + sel[i].theme + "'" + ')">' + sel[i].theme.toUpperCase() + '<br><span class="maker">Made by: ' + sel[i].maker + '</span></button>';
                }
            }
        })
};

// about:blank cloaker
function ab() {
    let wo = window.open();
    let url = window.location.href;
    let ifr = wo.document.createElement('iframe');
    ifr.src = url;
    ifr.style.width = "100vw";
    ifr.style.height = "100vh";
    ifr.style.border = "none";
    ifr.style.position = "fixed";
    ifr.style.outline = "none";
    ifr.style.inset = "0px";
    wo.document.body.appendChild(ifr);
}

