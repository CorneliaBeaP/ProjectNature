$(document).ready(function () {


let cartArray = JSON.parse(localStorage.getItem('cartArray'));
let totsum = JSON.parse(localStorage.getItem('totsum'));

// document.getElementById("confirmationproducts").innerHTML = (cartArray);
let list = document.getElementById("list");


cartArray.forEach(element => {
    // document.getElementById("confirmationproducts").append = element + "hejhej";
    $('#list').append("<li>" + element + "</li>");
});



    //    $('#list').append(cartArray[0]);

console.log(cartArray);
console.log(totsum);
document.getElementById("confirmationsum").innerHTML = totsum;


    

    
    $("#print").click(function () {
        window.print();
      });
});