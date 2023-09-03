fetch("/assets/json/gs.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    pp(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function pp(data) {
  var mainContainer = document.querySelector('#gr');
  var ix, ixLen, rand;
  for (ix = data.length-29, ixLen = data.length; ix < ixLen; ix++) {
    rand = Math.ceil(Math.random() * ixLen) - 1;
    var div = document.createElement("li");
    div.innerHTML =
      "<a href=/go.html?id=" +
      data[rand].id +
      ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
      data[rand].id +
      '.' +
      data[rand].img +
      '" data-loaded="true"><div class="badge">' +
      data[rand].badge +
      '</div><span class="box-title">' +
      data[rand].name +
      "</span></a>";
    mainContainer.appendChild(div);
    data.splice(rand, 1);
    ixLen--;
  }
}

