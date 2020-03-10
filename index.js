$(document).ready(function() {
  const productbox = document.getElementById("productbox");
  $("#cart").click(function() {
    $("#cartexpanded").toggle();
  });
  $.getJSON("products.json", function(response) {
    console.log(response);
    productArray = response.products;
    console.log(productArray);
    productArray.forEach(element => {
      productbox.innerHTML += ` <div class="product">
        <img src="${element.imageLink}" alt="">
        <div id="productinfo">
            <div class="productname">${element.name}</div>
            <div class="description">${element.description}
            </div>
            <div class="price">Pris ${element.price} kr</div>
            <button class="minusbtn">-</button>
            <div class="amount">0</div>
            <button class="plusbtn">+</button>
        </div>`;
       });




       const cartexpanded = document.getElementById("cartexpanded");
       $(".plusbtn").click(function() {
        let x = document.getElementById("productinfo").childNodes[9];
         console.log(x.innerHTML);
         let x2 = parseInt(x.innerHTML);
   
         x.innerHTML = x2 + 1;
   
         cartexpanded.innerHTML += this.parentNode.innerHTML;
   
         console.log(this.parentNode.innerHTML);
         if (cartexpanded.innerHTML == this.parentNode.innerHTML) {
           console.log("plus amount");
         } else {
           cartexpanded.innerHTML += this.parentNode.innerHTML;
           console.log(cartexpanded);
         }
       });


      
    });


  });
