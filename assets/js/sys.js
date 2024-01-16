/**
 * sys.js
 * @description - This is used to generate the games that are relating to the system that the user chooses.
 */

// params to get the url parameters
const params = new URLSearchParams(window.location.search);
// don't mind the name, cum is to represent the sys param in the url.
let cum = params.get("sys");
const data = fetch("/assets/json/gs.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        systems(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });
/**
 * This is the systems function
 * @description - It takes the data from gs.json and ONLY shows the specific games for the specific system that the user selects.
 * @param {*} data - the data that is being passed through.
 */
function systems(data) {
    // this sorts the data in alphabetical order
    data.sort(function (a, b) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });
    // the data is then filtered to whatever system is selected using the badge on the boxes.
    let sys = data.filter(function (el) {
        return el.badge === cum.toUpperCase(); // changed this so a home would match.
    });
    //console.log(sys + " " + cum) // Example: [object Object] gba
    // this function is responsible for operating searches.
    // yes its jquery.
    $(document).ready(function () {
        $.ajaxSetup({
            cache: false
        });
        $('#search').keyup(function () {
            $('#gs').html('');
            $('#name').val('');
            let searchField = $('#search').val();
            let expression = new RegExp(searchField, "i");
            $.each(sys, function (key, valu) {
                if (valu.name.search(expression) != -1) {
                    if (valu.new == "true") {
                        $('#gs').append('<li><a href=/go.html?id=' +
                            valu.id +
                            ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                            valu.id +
                            '.' +
                            valu.img +
                            '" data-loaded="true"><div class="badge">' +
                            valu.badge +
                            '</div><div class="new-badge">NEW!' +
                            '</div><span class="box-title">' +
                            valu.name +
                            "</span></a></li>");
                    } else {
                        $('#gs').append("<li><a href=/go.html?id=" +
                            valu.id +
                            ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                            valu.id +
                            '.' +
                            valu.img +
                            '" data-loaded="true"><div class="badge">' +
                            valu.badge +
                            '</div><span class="box-title">' +
                            valu.name +
                            "</span></a></li>");
                    }
                }
            });
        });
    });
    // the normal generator that happens on startup.
    let mainContainer = document.getElementById("gs");
    for (let i = 0; i <= sys.length; i++) {
        let div = document.createElement("li");
        if (sys[i].new == "true") {
            div.className = "new-class";
            div.innerHTML =
                "<a href=/go.html?id=" +
                sys[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                sys[i].id +
                '.' +
                sys[i].img +
                '" data-loaded="true"><div class="badge">' +
                data[i].badge +
                '</div><div class="new-badge">NEW!' +
                '</div><span class="box-title">' +
                sys[i].name +
                "</span></a>";
            mainContainer.appendChild(div);
        } else {
            div.innerHTML =
                "<a href=/go.html?id=" +
                sys[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                sys[i].id +
                '.' +
                sys[i].img +
                '" data-loaded="true"><div class="badge">' +
                sys[i].badge +
                '</div><span class="box-title">' +
                sys[i].name +
                "</span></a>";
            mainContainer.appendChild(div);
        }
        count();
    }
    /**
     * This is the count function
     * @description - this gets the length of the system in question and displays it to the user.
     */
    function count() {
        document.getElementById("libtot").innerHTML = "There are " + sys.length + " games to choose from!";
    }
}
/**
 * This is the suggestions function
 * @description - this is responsible for the buttons you see on the all.html page.
 * @param {String} val - val represents the string that is placed in the function when the button is clicked.
 */
function sug(val) {
    // it makes the value of the search bar the same as the val param.
    document.getElementById("search").value = val;
}