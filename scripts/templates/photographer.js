export function photographerTemplate(photographer) {
  const { name, portrait } = photographer; // destructuration

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const divImg = document.createElement("div"); // Création du div pour l'image
    divImg.classList.add("IDPhoto"); // Ajout de la classe IDPhoto

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    divImg.appendChild(img); // Ajout de l'image dans le div

    const h2 = document.createElement("h2");
    h2.textContent = name;

    article.appendChild(divImg);
    article.appendChild(h2);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
