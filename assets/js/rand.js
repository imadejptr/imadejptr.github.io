/**
 * rand.js
 * @description - this randomly generates 15 games whenever a page is loaded
 * This code was taken from emugalaxy, and was a pain in the ass to use when I was stupidly had to change every number meticulously.
 */

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
  let mainContainer = document.querySelector('#gr');
  let ix, ixLen, rand;
  // the reason why its 29 is because it took a lot of trial and error to get it to show 15 games.
  for (ix = data.length - 29, ixLen = data.length; ix < ixLen; ix++) {
    rand = Math.ceil(Math.random() * ixLen) - 1;
    let div = document.createElement("li");
    if (data[rand].new == "true") {
      div.innerHTML =
        "<a href=/go.html?id=" +
        data[rand].id +
        ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
        data[rand].id +
        '.' +
        data[rand].img +
        '" data-loaded="true"><div class="badge">' +
        data[rand].badge +
        '</div><div class="new-badge">NEW!' +
        '</div><span class="box-title">' +
        data[rand].name +
        "</span></a>";
      mainContainer.appendChild(div);
      data.splice(rand, 1);
      ixLen--;
    } else {
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
}

