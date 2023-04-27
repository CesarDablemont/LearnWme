let http = new XMLHttpRequest();

http.open('GET', '../../data/articles.json', true);
http.send();

http.onload = function () {

  if (this.readyState == 4 && this.status == 200) {
    let articles = JSON.parse(this.responseText);
    let output = "";

    articles.sort(function (a, b) {
      return b.date - a.date;
    });

    for (let item of articles) {
      for (let i = 0; i < item.category.length; i++) {

        if (item.category[i] == filter) {

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
      };
    };

    document.getElementById("main-grid").innerHTML += output;
  };

  // met en avant le premier article
  let firstChild = document.getElementById("main-grid").firstElementChild;
  firstChild.classList.replace("main-grid-item", "main-grid-main-article");

};