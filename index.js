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
    $(".plusbtn").click(function () {
      let i = this.parentNode;
      let x = i.childNodes[9];

      let x2 = parseInt(x.innerHTML);
      x.innerHTML = x2 + 1;
      let arrayitem;


      if (
        !cartproductbox.innerHTML.includes(this.parentNode.childNodes[1].innerHTML)
      ) {
        arrayitem = this.parentNode;
        console.log(arrayitem.childNodes);
        let pname = arrayitem.childNodes[1].innerHTML;
        let pdescription = arrayitem.childNodes[3].innerHTML;
        let pprice = arrayitem.childNodes[5].innerHTML;
        let pamount = arrayitem.childNodes[9].innerHTML;
        newArray.push(pname, pdescription, pprice, pamount);







        // let item = JSON.stringify(cartArray);
        // // console.log(arrayitem.parentNode);
        // // console.log(cartArray);

        
        // let element = arrayitem;
        
        // let html = element.outerHTML;
        
        // let data = { html: html };
        
        // let json = JSON.stringify(data);
        
        // // console.log(json);
        // localStorage.setItem("json", json);
        




        cartproductbox.innerHTML += this.parentNode.innerHTML;

      } else {
        // v1 = this.parentNode;
        arrayitem = this.parentNode;
      console.log(arrayitem);
      pname = arrayitem.childNodes[1].innerHTML;
      let pdescription = arrayitem.childNodes[3].innerHTML;
      let pprice = arrayitem.childNodes[5].innerHTML;
      let pamount = arrayitem.childNodes[9].innerHTML;
      newArray.push(pname, pdescription, pprice, pamount);

        let v2 = parseInt(cartproductbox.childNodes[9].innerHTML);
console.log(cartproductbox.childNodes[9].innerHTML);


        cartproductbox.childNodes[9].innerHTML = v2 + 1;


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
      
      
      
      cartArray.push(newArray);
      localStorage.setItem('cartArray', JSON.stringify(cartArray));
console.log(cartArray);

      window.location.href = "confirmation.html";
      // töm varukorgen 
    });



  });

});
