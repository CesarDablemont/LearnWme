const product = new URLSearchParams(window.location.search).get('select');
var articleIndex;
var articles = null;

//Charge l'article
async function initArticlePage() {

  try {
    const response = await fetch('../../data/article.json');
    articles = await response.json();
  } catch (error) {
    console.log("error");
    console.error(error);
    return;
  }

  articleIndex = indexOfArticle(product);
  console.log("articleIndex: ", articleIndex);
  console.log("titre: ", articles[articleIndex].title);
  console.log("description: ", articles[articleIndex].description);

  let output = "";

  output += `
  <div>

    <h3>titre:</h3>
    ${articles[articleIndex].title}
    <br><br>

    <h3>description:</h3>
    ${articles[articleIndex].description}
    <br><br>

    <h3>chapeau:</h3>
    ${articles[articleIndex].chapeau}
    <br><br>

    <h3>image:</h3>
    <img class="imgArticleMain" src=${articles[articleIndex].image}>
    <br><br>

    <h3>corps:</h3>
    ${articles[articleIndex].body}

  </div>
  `;

  document.querySelector(".box-article").innerHTML = output;

};

//Renvoie l'index de l'article et renvoie -1 si l'article n'existe pas
function indexOfArticle(title) {
  for (var i = 0; i < articles.length; i++) {
    if (articles[i].title == title) return i;
  }
  return -1;
};


initArticlePage();

//Boutton pour revenir à la page précédente
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});