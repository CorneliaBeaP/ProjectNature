// let cartbutton = document.getElementById('cart');
// let cartexpanded = document.getElementById('cartexpanded');
// cartbutton.addEventListener('click', opencart);


// function opencart(){
// if (cartexpanded.classList.contains('hidecart')){
//     cartexpanded.classList.remove('hidecart');
//     cartexpanded.classList.add('showcart');
// }else{
//     cartexpanded.classList.remove('showcart');
//     cartexpanded.classList.add('hidecart');
// }}


$(document).ready(function(){
    $("#cart").click(function(){
      $("#cartexpanded").toggle();
    });
  });






// var i;

// for (i = 0; i < cart.length; i++) {
//   cart[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var cartexpanded = this.nextElementSibling;
//     if (cartexpanded.style.maxHeight){
//       cartexpanded.style.maxHeight = null;
//     } else {
//       cartexpanded.style.maxHeight = cartexpanded.scrollHeight + "px";
//     } 
//   });
// }