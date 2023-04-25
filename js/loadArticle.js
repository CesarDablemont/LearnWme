let http = new XMLHttpRequest();

http.open('GET', '../../data/article.json', true);
http.send();

http.onload = function () {

  if (this.readyState == 4 && this.status == 200) {
    let article = JSON.parse(this.responseText);
    let output = "";

    for (let item of article) {
      output += `
      <div class="main-grid-item">
      <a href= "../../html/articleBase.html?select=${item.title}">
        <img class="image" src="${item.image}" alt="">
        <h5 class="title">
          ${item.title}
        </h5>
        </a>
      </div>
      `;
    }

    document.querySelector(".main-grid").innerHTML += output;
  }

};