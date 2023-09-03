const params = new URLSearchParams(window.location.search);
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

  function systems(data) {
    data.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
    var sys = data.filter(function (el) {
      return el.badge === cum.toUpperCase(); // Changed this so a home would match
    });
    console.log(sys + " " + cum)
    $(document).ready(function () {
      $.ajaxSetup({
        cache: false
      });
      $('#search').keyup(function () {
        $('#gs').html('');
        $('#name').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.each(sys, function (key, valu) {
          if (valu.name.search(expression) != -1) {
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
        });
      });
    });
    var mainContainer = document.getElementById("gs");
    for (var i = 0; i <= sys.length; i++) {
      var div = document.createElement("li");
      div.innerHTML =
        "<a href=/go.html?id=" +
        sys[i].id +
        ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
        sys[i].id +
        '.' +
        sys[i].img +
        '".jpg" data-loaded="true"><div class="badge">' +
        sys[i].badge +
        '</div><span class="box-title">' +
        sys[i].name +
        "</span></a>";
      mainContainer.appendChild(div);
      count();
    }

    function count() {
      document.getElementById("libtot").innerHTML = "There are " + sys.length + " games to choose from!";
    }
  }

  function sug(val) {
    document.getElementById("search").value = val;
  }