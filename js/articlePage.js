const product = new URLSearchParams(window.location.search).get('select');
var articleIndex;
var articles = null;

//Charge l'article
async function initArticlePage() {

  try {
    const response = await fetch('../../data/articles.json');
    articles = await response.json();
  } catch (error) {
    console.log("error");
    console.error(error);
    return;
  }

  articleIndex = indexOfArticle(product);

  let output = "";
  let date = new Date(parseInt(articles[articleIndex].date));

  output += `
  <div>

    <h3>titre:</h3>
    ${articles[articleIndex].title}
    <br><br>

    <h3>auteur:</h3>
    ${articles[articleIndex].author}
    <br><br>

    <h3>publier le:</h3>
    ${formatDate(date)}
    <br><br>

    <h3>journal:</h3>
    ${articles[articleIndex].newspaper}
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

//Formate les nombres à un chiffre (7 => 07, 10 => 10)
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

//Formate la date (MM/dd/yyyy à hh/mm/ss)
function formatDate(date) {
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/') +
    ' à ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

initArticlePage();

//Boutton pour revenir à la page précédente
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});