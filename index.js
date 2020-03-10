$(document).ready(function () {
  const productbox = document.getElementById("productbox");
  $("#cart").click(function () {
    $("#cartexpanded").toggle();
  });
  $.getJSON("products.json", function (response) {

    let cartArray = [];
    productArray = response.products;

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
    const cartproductbox = document.getElementById("cartproductbox");
    let newArray = [];
    let cartexpandedArray=[];
    $(".plusbtn").click(function () {
      let i = this.parentNode;
      let x = i.childNodes[9];

      let x2 = parseInt(x.innerHTML);
      x.innerHTML = x2 + 1;
      let arrayitem;

let pname;
let pdescription;
let pprice;
let pamount;




      if (
        !cartproductbox.innerHTML.includes(this.parentNode.childNodes[1].innerHTML)
      ) {
        




        cartproductbox.innerHTML += this.parentNode.innerHTML;

      } else {



        let v2 = parseInt(cartproductbox.childNodes[9].innerHTML);



        cartproductbox.childNodes[9].innerHTML = v2 + 1;


      }





      arrayitem = this.parentNode;
      pname = arrayitem.childNodes[1].innerHTML;
      pdescription = arrayitem.childNodes[3].innerHTML;
      pprice = arrayitem.childNodes[5].innerHTML;
      pamount = arrayitem.childNodes[9].innerHTML;

if(newArray.includes(arrayitem.childNodes[1].innerHTML)){


  let amountforproduct = parseInt(newArray[3]);

  newArray[3] = amountforproduct + 1;



}else{
 newArray=[];
  newArray.push(pname, pdescription, pprice, pamount);
cartexpandedArray.push(newArray);

localStorage.setItem('cartexpandedArray', JSON.stringify(cartexpandedArray));

console.log(cartexpandedArray);

  cartArray.push(newArray);



}






    });


    $(".minusbtn").click(function () {
      let i = this.parentNode;
      let x = i.childNodes[9];

      let x2 = parseInt(x.innerHTML);
      if (x2 > 0)
        x.innerHTML = x2 - 1;
    });

    $("#clearcart").click(function () {
      // töm varukorgen

    });

    $("#order").click(function () {
      
      
      

      localStorage.setItem('cartArray', JSON.stringify(cartArray));


      window.location.href = "confirmation.html";
      // töm varukorgen 
    });



  });

});
