//Mettre le code JavaScript lié à la page photographer.html

let portfolio = `assets/photographers/mimi/${portfolio}`;
function getMimiPortfolio() {
  const article = document.createElement("article");

  const divImg = document.createElement("div"); // Création du div pour l'image
  divImg.classList.add("photo"); // Ajout de la classe IDPhoto

  const img = document.createElement("img");
  img.setAttribute("src", portfolio);

  divImg.appendChild(img); // Ajout de l'image dans le div

  const h2 = document.createElement("h2");
  h2.textContent = name;

  article.appendChild(divImg);
  article.appendChild(h2);

  return article;
}
return { portfolio };
