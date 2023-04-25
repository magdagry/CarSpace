import { getParamValueFromUrl } from "../scripts/common.js";

$(function() {
    const price = getParamValueFromUrl('price');
    const data = deliveryDate();

    if (price != undefined){
        $("#price").append(price);
    }

    $("#delivery").append(data);

});



function deliveryDate() {
    const today = new Date()    
    const delivery = new Date(today);
    delivery.setDate(today.getDate()+14)

    return delivery.toLocaleDateString();
}
