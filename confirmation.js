$(document).ready(function () {


let cartArray = JSON.parse(localStorage.getItem('cartArray'));


document.getElementById("confirmationproducts").innerHTML = (cartArray);

    //    $('#list').append(cartArray[0]);

console.log(cartArray);


    

    
    $("#print").click(function () {
        window.print();
      });
});