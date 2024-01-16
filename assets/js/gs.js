/**
 * gs.js
 * @description - This is used to generate the games that are relating to the system that the user chooses.
 * This is different compared to sys.js because sys.js is for the games that are specific to the system it supports
 * This generates every single game and is used on all.html.
 */

const data = fetch("/assets/json/gs.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        search(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });

function search(data) {
    data.sort(function (a, b) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });
    $(document).ready(function () {
        $.ajaxSetup({
            cache: false
        });
        $('#search').keyup(function () {
            $('#gs').html('');
            $('#name').val('');
            var searchField = $('#search').val();
            var expression = new RegExp(searchField, "i");
            $.each(data, function (key, valu) {
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
    var mainContainer = document.getElementById("gs");
    for (var i = 0; i <= data.length; i++) {
        var div = document.createElement("li");
        if (data[i].new == "true") {
            div.innerHTML =
                "<a href=/go.html?id=" +
                data[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                data[i].id +
                '.' +
                data[i].img +
                '" data-loaded="true"><div class="badge">' +
                data[i].badge +
                '</div><div class="new-badge">NEW!' +
                '</div><span class="box-title">' +
                data[i].name +
                "</span></a>";
            mainContainer.appendChild(div);
        } else {
            div.innerHTML =
                "<a href=/go.html?id=" +
                data[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                data[i].id +
                '.' +
                data[i].img +
                '" data-loaded="true"><div class="badge">' +
                data[i].badge +
                '</div><span class="box-title">' +
                data[i].name +
                "</span></a>";
            mainContainer.appendChild(div);
        }
        count();
    }
    function count() {
        document.getElementById("libtot").innerHTML = "There are " + data.length + " games to choose from!";
    }
}

function sug(val) {
    document.getElementById("search").value = val;
}