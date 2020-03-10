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
    let cartArray = [];
    $(".plusbtn").click(function() {
      let i = this.parentNode;
      let x = i.childNodes[9];
      let v = cartexpanded.childNodes[13];

      if (
        cartexpanded.innerHTML.includes(this.parentNode.childNodes[1].innerHTML)
      ) {


        let v2 = parseInt(v.innerHTML);
        v.innerHTML = v2 + 1;
        let x2 = parseInt(x.innerHTML);
        x.innerHTML = x2 + 1;
      } else {
        cartArray.push(this.parentNode);
        console.log(cartArray);
        
        cartexpanded.innerHTML += this.parentNode.innerHTML;
        console.log(cartexpanded.innerHTML);
        console.log(this.parentNode.childNodes[1]);

        console.log(x.innerHTML);
        let x2 = parseInt(x.innerHTML);

        x.innerHTML = x2 + 1;
      }
    });
  });
});
