$(document).ready(function () {


let cartArray = JSON.parse(localStorage.getItem('cartArray'));
let totsum = JSON.parse(localStorage.getItem('totsum'));

let list = document.getElementById("list");


cartArray.forEach(element => {
    $('#list').append("<li>" + element[0] + "<br>" + element[1] + "<br>" + element[2] + "<br> Antal: " + element[3] + "</li>");
    
});




console.log(cartArray);
console.log(totsum);
document.getElementById("confirmationsum").innerHTML = totsum;


    

    
    $("#print").click(function () {
        window.print();
      });
});