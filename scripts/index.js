import { categories } from "../data/data.js";

$(function(){

  const carCategories = categories;
 
  const groupCardHtml = createGroupCardHtml(carCategories);
  $("#cards").append(groupCardHtml);
  
});

// Tworzenie pojedynczej karty
function createCardHtml(id, name, desc, image) {
    let card = `<div class="col">
    <div class="card">
      <img src="${image}" class="card-img-top card-img" alt="${name}">
      <div class="card-body">
        <h5 class="card-title card-title-margin">${name}</h5>
        <p class="card-text card-text-line text-muted">
          ${desc}
        </p>
        <a href="cars.html?id=${id}" class="btn btn-outline-secondary btn-sm">Więcej...</a>
      </div>
    </div>
  </div>`;

    return card;
} 

// Tworzenie grupy kart na podstawie tablicy kategorii
function createGroupCardHtml(categoriesArray) {
    let group = "";
    categoriesArray.forEach((cat) => {
        group += createCardHtml(cat.id, cat.name, cat.description, cat.image);
    } );

    return group;
}
