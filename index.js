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
      <div class="priceinfo">Pris <div class="price">${element.price}</div> kr</div>
      <button class="minusbtn">-</button>
      <div class="amount">0</div>
      <button class="plusbtn">+</button>
      </div>`;

    });
    let cloneamount;
    const cartexpanded = document.getElementById("cartexpanded");
    const cartproductbox = document.getElementById("cartproductbox");

    let cartexpandedArray = [];
    let clonearray = [];
    tempArray = [];




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

      let sum = document.getElementById("sum");
      let sumprice = i.childNodes[5].childNodes[1].innerHTML;
      let sumprice2 = parseInt(sumprice);

      console.log(sumprice2);

      let sum2 = parseInt(sum.innerHTML);
      sum.innerHTML = sum2 + sumprice2 + "kr";


      if (
        !cartproductbox.innerHTML.includes(this.parentNode.childNodes[1].innerHTML)
      ) {
        let clone = $(this.parentNode).clone();
        clone.appendTo("#cartproductbox");
        clonearray.push(clone);




      } else {



        clonearray.forEach(element => {

          if (element[0].childNodes[1].innerHTML.includes(this.parentNode.childNodes[1].innerHTML)) {
            cloneamount = parseInt(element[0].childNodes[9].innerHTML);
            element[0].childNodes[9].innerHTML = cloneamount + 1;
          }

        });


      }

      arrayitem = this.parentNode;
      pname = arrayitem.childNodes[1].innerHTML;
      pdescription = arrayitem.childNodes[3].innerHTML;
      pprice = arrayitem.childNodes[5].innerHTML;
      pamount = arrayitem.childNodes[9].innerHTML;

    });


    $(".minusbtn").click(function () {
      // uppdaterar sidan
      let i = this.parentNode;
      let x = i.childNodes[9];

      let x2 = parseInt(x.innerHTML);
      if (x2 > 0)
        x.innerHTML = x2 - 1;

      let sum = document.getElementById("sum");
      let sumprice = i.childNodes[5].childNodes[1].innerHTML;
      let sumprice2 = parseInt(sumprice);

      console.log(sumprice2);

      let sum2 = parseInt(sum.innerHTML);




      // uppdaterar kundvagn
      clonearray.forEach(element => {
        cloneamount = parseInt(element[0].childNodes[9].innerHTML);
        if (element[0].childNodes[9].innerHTML == 1 && element[0].childNodes[1].innerHTML.includes(this.parentNode.childNodes[1].innerHTML)) {
          sum.innerHTML= 0 + "kr";
          clonearray.splice(clonearray.indexOf(element), 1);
          element[0].remove();

        } else {
          if (element[0].childNodes[1].innerHTML.includes(this.parentNode.childNodes[1].innerHTML)) {
            element[0].childNodes[9].innerHTML = cloneamount - 1;
            sum.innerHTML = sum2 - sumprice2 + "kr";
          }


        }
      });



    });

    $("#clearcart").click(function () {
      cartproductbox.innerHTML = "";
      clonearray = [];
      cartArray = [];

      let amountarray = Array.from(document.getElementsByClassName("amount"));

      for (i = 0; i < amountarray.length; i++) {
        amountarray[i].innerHTML = 0;
      }

    });




    $("#order").click(function () {
      clonearray.forEach(element => {
        tempArray = [];
        let pname2 = element[0].childNodes[1].innerHTML;
        let pdescription2 = element[0].childNodes[3].innerHTML;
        let pprice2 = element[0].childNodes[5].innerHTML;
        let pamount2 = element[0].childNodes[9].innerHTML;

        tempArray.push(pname2, pdescription2, pprice2, pamount2);
        cartArray.push(tempArray);
      });





      localStorage.setItem('cartArray', JSON.stringify(cartArray));

      console.log(clonearray);
      window.location.href = "confirmation.html";


      // töm varukorgen 
    });



  });

});
