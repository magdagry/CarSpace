import { getParamValueFromUrl } from "../scripts/common.js";
import { categoryDetails } from "../data/data.js";

$(function(){
    var id = getParamValueFromUrl('id');
    console.log('Id: ', id);

    const carCategoryDetails = categoryDetails;
    let brandDetails = null;

    if(id != null) {
        brandDetails = (carCategoryDetails.filter(brand => brand.categoryId == id))[0];
        console.log(brandDetails);

        if(brandDetails != undefined){
            $("#bradcrampTitle").append(brandDetails.name);
            $("#carName").append(brandDetails.name);
            $("#carDescription").append(brandDetails.description);

            const groupCardHtml = createGroupCardHtml(brandDetails.cars);
            $("#cards").append(groupCardHtml);
        }
    }

});

function createBrandCardHtml(id, name, enginePower, mileage, year, price, image) {
    let card = `<div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${image}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body card-body-padding">
            <h2 class="card-title">${name}</h2>
            <p class="card-text">
              <small>Moc silnika: </small><span>${enginePower}</span><small>Kh</small>
            </p>
            <br />
            <p class="card-text"><small>Przebieg: </small> <span>${mileage}</span><small>km</small></p>
            <br />
            <p class="card-text"><small>Rok:</small> <span>${year}</span></p>
            <br />
            <p class="card-text">
              Cena od <span class="val">${price}</span> zł
            </p>
            <br />
            <p class="card-text">
              <small class="text-muted">Cena brutto</small>
            </p>
            <div class="card-btn">
              <a href="details.html?id=${id}"
                class="btn btn-outline-secondary btn-sm justify-content-center">Więcej...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

    return card;
} 

// Tworzenie grupy kart na podstawie tablicy kategorii
function createGroupCardHtml(carsArray) {
    let group = "";
    carsArray.forEach((car) => {
        group += createBrandCardHtml(car.id, car.name, car.enginePower, car.mileage, car.year, car.price, car.image);
    } );

    return group;
}



