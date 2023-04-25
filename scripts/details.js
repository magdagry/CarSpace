import { getParamValueFromUrl } from "../scripts/common.js";
import { brandDetails } from "../data/data.js";

let totalPrice = 0;

$(function(){
    const id = getParamValueFromUrl('id');
    console.log('Id: ', id);

    const allBrandDetails = brandDetails;
    let detail = null;

    

    if(id != null) {
        detail = (allBrandDetails.filter(brand => brand.id == id))[0];

        console.log(detail);

        if(detail != undefined){
            totalPrice = detail.price;
            $("#breadcrumbCategory").append(`<a href="cars.html?id=${detail.categoryId}">${detail.brand}</a>`);
            $("#pageTitle").text(detail.name);
            $("#breadcrumbName").text(detail.name);
            $("#detailName").text(detail.name);
            $("#brandDescription").text(detail.description);
            $("#brandPrice").text(detail.price);
            $("#carPrice").text(detail.price);
            $("#accessoriesPrice").text(0);
            $("#totalPrice").text(detail.price);
            //$("#breadcrumbCategory").text(detail.brand);

            const image = `<img src="${detail.image}" class="img-fluid">`;
            $("#brandImage").append(image);

            const detailsTable = createDetailsTable(detail.details);

            $("#detailsTable").append(detailsTable);

            const accessoriesTable = createAccesoriesTable(detail.accessories);

            $("#accesoriesTable").append(accessoriesTable);
            
            $(".form-check-input").click(function(event){
                const accessoriesPrice = calculateAccessoriesPrice();
                $("#accessoriesPrice").text(accessoriesPrice);

                totalPrice = accessoriesPrice + detail.price;
                $("#totalPrice").text(totalPrice);
            })

            $("#submit").click(function(event) {
                
            });
        }
    }

    prepareForm();

})

function calculateAccessoriesPrice() {
    let totalPrice = 0;
  
    // Przejście po wszystkich zaznaczonych checkbox-ach
    $(".form-check-input:checked").each(function() {
      const row = $(this).closest("tr"); // znajdujemy najbliższy rząd (tr)
      const price = parseInt(row.find("td:last-child").text()); // pobieramy cenę z ostatniej komórki
      totalPrice += price; // dodajemy cenę do sumy
    });
  
    // Wyświetlenie sumy cen
    return totalPrice;
  }
  

function createDetailRow(name, value) {
    const row = `<tr><td>${name}</td><td style="text-align: end">${value}</td></tr>`;

    return row;
}



function createAccessoriesRow(id, name, value) {
    
    const row = `        
    <tr class="check-input">
    <td width="60">
      <div class="form-check" >
        <input class="form-check-input" type="checkbox">
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

function prepareForm() {
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

        if (!form.checkValidity()) {
            // event.preventDefault();
            // event.stopPropagation();
            console.log('not ok');
            form.classList.add('was-validated');
            return false;
        }

        console.log('ok');
        // form.classList.add('was-validated');

        window.location.href = `success.html?price=${totalPrice}`;
        },true)

        
    })
}