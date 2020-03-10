





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




const cartexpanded = document.getElementById("cartexpanded");
       $(".plusbtn").click(function() {
       console.log(this.parentNode.innerHTML);
       cartexpanded.innerHTML += this.parentNode.innerHTML;
       console.log(cartexpanded);
       
       });


       


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