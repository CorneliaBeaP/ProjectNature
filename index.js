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
  const productbox = document.getElementById("productbox");
    $("#cart").click(function(){
      $("#cartexpanded").toggle();
    });
    $.getJSON("products.json", function(response) {
     console.log(response)
     productArray = response.products;
     console.log(productArray);
       productArray.forEach(element => {
        productbox.innerHTML += ` <div class="product">
        <img src="${element.imageLink}" alt="">
        <div class="productinfo">
            <div class="productname">${element.name}</div>
            <div class="description">${element.description}
            </div>
            <div class="price">Pris ${element.price} kr</div>
            <button class="minusbtn">-</button>
            <div class="amount">Antal</div>
            <button class="plusbtn">+</button>
        </div>`
       });
       $("#productbox").append = "shia"
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