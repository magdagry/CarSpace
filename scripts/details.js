import { getParamValueFromUrl } from "../scripts/common.js";
import { brandDetails } from "../data/data.js";

$(function(){
    var id = getParamValueFromUrl('id');
    console.log('Id: ', id);

    const allBrandDetails = brandDetails;
    let detail = null;

    if(id != null) {
        detail = (allBrandDetails.filter(brand => brand.id == id))[0];

        console.log(detail);

        if(detail != undefined){
            $("#pageTitle").append(detail.name);
            $("#breadcrumbName").append(detail.name);
            $("#detailName").append(detail.name);
            $("#brandDescription").append(detail.description);
            $("#brandPrice").append(detail.price);
            $("#breadcrumbCategory").append(detail.brand);

            const image = `<img src="${detail.image}" class="img-fluid">`;
            $("#brandImage").append(image);

            const detailsTable = createDetailsTable(detail.details);

            $("#detailsTable").append(detailsTable);

            const accessoriesTable = createAccesoriesTable(detail.accessories);

            $("#accesoriesTable").append(accessoriesTable);
            
        
        }
    }

})

function createDetailRow(name, value) {
    const row = `<tr><td>${name}</td><td style="text-align: end">${value}</td></tr>`;

    return row;
}



function createAccessoriesRow(id, name, value) {
    const row = `        
    <tr>
    <td width="60">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="">
      </div>
    </td>
    <td>${name}</td>
    <td style="text-align: end" >${value} zł</td>
  </tr>`;

  return row;
}

// Tworzenie grupy kart na podstawie tablicy kategorii
function createDetailsTable(detailsArray) {
    let table = "";
    detailsArray.forEach((detail) => {
        table += createDetailRow(detail.name, detail.value);
    } );

    return table;
}

function createAccesoriesTable(accessoriesArray) {
    let table = "";
    accessoriesArray.forEach((accesory) => {
        table += createAccessoriesRow(accesory.id, accesory.name, accesory.price);
    } );

    return table;
}
