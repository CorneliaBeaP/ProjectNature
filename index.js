$(document).ready(function () {
  const productbox = document.getElementById("productbox");
  $("#cart").click(function () {
    $("#cartexpanded").toggle();
  });
  $.getJSON("products.json", function (response) {
    let cartArray = [];
    productArray = response.products;

    productArray.forEach(element => {
      productbox.innerHTML += `<div class="product">
      <img src="${element.imageLink}" alt="">
      <div id="productinfo">
      <div class="productname">${element.name}</div>
      <div class="description">${element.description}</div>
      <div class="priceinfo">Pris <div class="price">${element.price}</div> kr</div>
      <button class="minusbtn">-</button>
      <div class="amount">0</div>
      <button class="plusbtn">+</button></div>`;
    });
    let cloneamount;
    const cartexpanded = document.getElementById("cartexpanded");
    const cartproductbox = document.getElementById("cartproductbox");

    let cartexpandedArray = [];
    let clonearray = [];
    tempArray = [];
    let plusbtnfromclone;
    let minusbtnfromclone;
    let deletebtnfromclone;
    let amountfromchildnodes;
    let sum = document.getElementById("sum");
    let productBoxArray = document.getElementById("productbox").childNodes;
    let amountarray = [];

    $(".plusbtn").click(function () {
      let i = this.parentNode;
      let amountfromchildnodes = i.childNodes[9];
      //       let minusbtnfromchildnodes = i.childNodes[7];
      //       let plusbtnfromchildnodes = i.childNodes[11];

      // plusbtnfromchildnodes.click(function(){

      // })

      let x2 = parseInt(amountfromchildnodes.innerHTML);
      amountfromchildnodes.innerHTML = x2 + 1;

      let sumprice = i.childNodes[5].childNodes[1].innerHTML;
      let sumprice2 = parseInt(sumprice);

      let sum2 = parseInt(sum.innerHTML);
      sum.innerHTML = sum2 + sumprice2;

      if (
        !cartproductbox.innerHTML.includes(
          this.parentNode.childNodes[1].innerHTML
        )
      ) {
        let clone = $(this.parentNode).clone();
        clone[0].innerHTML += `<button class="deletebtn">X</button>`;

        clone.appendTo("#cartproductbox");
        clonearray.push(clone);

        // LAGT TILL FÖR ATT LÖSA PLUS I CART

        plusbtnfromclone = clone[0].childNodes[11];

        minusbtnfromclone = clone[0].childNodes[7];

        deletebtnfromclone = clone[0].childNodes[12];





        // AVSLUTAS HÄR
      } else {
        clonearray.forEach(element => {
          if (
            element[0].childNodes[1].innerHTML.includes(
              this.parentNode.childNodes[1].innerHTML
            )
          ) {
            cloneamount = parseInt(element[0].childNodes[9].innerHTML);
            element[0].childNodes[9].innerHTML = cloneamount + 1;
          }
        });
      }

      // FORTSÄTT HÄR FÖR ATT LÖSA PLUS I CARTEN

      // AVSLUTAS HÄR
    });

    $(".minusbtn").click(function () {
      // uppdaterar sidan
      let i = this.parentNode;
      amountfromchildnodes = i.childNodes[9];

      let x2 = parseInt(amountfromchildnodes.innerHTML);
      if (x2 > 0) {
        amountfromchildnodes.innerHTML = x2 - 1;
      }

      let sum = document.getElementById("sum");
      let sumprice = i.childNodes[5].childNodes[1].innerHTML;
      let sumprice2 = parseInt(sumprice);

      let sum2 = parseInt(sum.innerHTML);

      // uppdaterar kundvagn
      clonearray.forEach(element => {
        cloneamount = parseInt(element[0].childNodes[9].innerHTML);
        if (
          element[0].childNodes[9].innerHTML > 0 &&
          element[0].childNodes[1].innerHTML.includes(
            this.parentNode.childNodes[1].innerHTML
          )
        ) {
          if (
            element[0].childNodes[9].innerHTML == 1 &&
            element[0].childNodes[1].innerHTML.includes(
              this.parentNode.childNodes[1].innerHTML
            )
          ) {
            sum.innerHTML = sum2 - sumprice2;
            clonearray.splice(clonearray.indexOf(element), 1);
            element[0].remove();
          } else {
            if (
              element[0].childNodes[1].innerHTML.includes(
                this.parentNode.childNodes[1].innerHTML
              )
            ) {
              element[0].childNodes[9].innerHTML = cloneamount - 1;
              sum.innerHTML = sum2 - sumprice2;
            }
          }
        }
      });
    });

    $("#cartproductbox").on("click", ".plusbtn", plusbtnfromclone, function () {
      let sumdiv = this.parentNode.childNodes[9];
      let sumHTML = sumdiv.innerHTML;
      let sumparsed = parseInt(sumHTML);
      let plusbtnprice = this.parentNode.childNodes[5].childNodes[1].innerHTML;
      let plusbtnpriceparsed = parseInt(plusbtnprice);

      sumparsed2 = parseInt(sum.innerHTML);
      sumdiv.innerHTML = sumparsed + 1;

      sum.innerHTML = sumparsed2 + plusbtnpriceparsed;

      productBoxArray.forEach(element => {
        if (
          element.childNodes[3].childNodes[1].innerHTML.includes(
            this.parentNode.childNodes[1].innerHTML
          )
        ) {
          let amountParsed = parseInt(
            element.childNodes[3].childNodes[9].innerHTML
          );
          amountParsed += 1;
          element.childNodes[3].childNodes[9].innerHTML = amountParsed;
          console.log("från plus");

          console.log(clonearray);

        }
      });
    });

    $("#cartproductbox").on(
      "click",
      ".minusbtn",
      minusbtnfromclone,
      function () {
        let sumdiv = this.parentNode.childNodes[9];
        let sumHTML = sumdiv.innerHTML;
        let sumparsed = parseInt(sumHTML);
        let minusbtnprice = this.parentNode.childNodes[5].childNodes[1]
          .innerHTML;
        let minusbtnpriceparsed = parseInt(minusbtnprice);

        sumparsed2 = parseInt(sum.innerHTML);
        sumdiv.innerHTML = sumparsed - 1;

        sum.innerHTML = sumparsed2 - minusbtnpriceparsed;

        if (sumparsed > 1) {
          sumdiv.innerHTML = sumparsed - 1;
        } else {
          clonearray.forEach(element => {
            if (element[0].childNodes[1].innerHTML.includes(this.parentNode.childNodes[1].innerHTML)) {

              clonearray.splice(clonearray.indexOf(element), 1);
              this.parentNode.remove();
            }
          });


        }

        productBoxArray.forEach(element => {
          if (
            element.childNodes[3].childNodes[1].innerHTML.includes(
              this.parentNode.childNodes[1].innerHTML
            )
          ) {
            let amountParsed = parseInt(
              element.childNodes[3].childNodes[9].innerHTML
            );
            amountParsed += -1;
            element.childNodes[3].childNodes[9].innerHTML = amountParsed;
          }
        });
        console.log("från minus");
        console.log(clonearray);


      });

    $("#cartproductbox").on("click", ".deletebtn", deletebtnfromclone, function () {
      productBoxArray.forEach(element => {
        if (
          element.childNodes[3].childNodes[1].innerHTML.includes(
            this.parentNode.childNodes[1].innerHTML
          )
        ) {
          let quantity = parseInt(
            element.childNodes[3].childNodes[9].innerHTML
          );

          let price = parseInt(
            element.childNodes[3].childNodes[5].childNodes[1].innerHTML
          );

          let totalAmount = quantity * price;
          element.childNodes[3].childNodes[9].innerHTML = 0;
          console.log(totalAmount);
          let deletesum = parseInt(sum.innerHTML);
          sum.innerHTML = deletesum - totalAmount;
        }
      });

      clonearray.forEach(element => {
        if (element[0].childNodes[1].innerHTML.includes(this.parentNode.childNodes[1].innerHTML)) {

          clonearray.splice(clonearray.indexOf(element), 1);
          this.parentNode.remove();
        }});


    });

    $("#clearcart").click(function () {
      cartproductbox.innerHTML = "";
      clonearray = [];
      cartArray = [];
      sum.innerHTML = 0;

      amountarray = Array.from(document.getElementsByClassName("amount"));

      for (i = 0; i < amountarray.length; i++) {
        amountarray[i].innerHTML = 0;
      }

      sum.innerHTML = 0;
    });

    $("#order").click(function () {
      if (sum.innerHTML.length > 1) {
        clonearray.forEach(element => {
          tempArray = [];
          let pname2 = element[0].childNodes[1].innerHTML;
          let pdescription2 = element[0].childNodes[3].innerHTML;
          let pprice2 = element[0].childNodes[5].innerHTML;
          let pamount2 = element[0].childNodes[9].innerHTML;

          tempArray.push(pname2, pdescription2, pprice2, pamount2);
          console.log(tempArray);

          cartArray.push(tempArray);
        });

        console.log(cartArray);


        localStorage.setItem("totsum", JSON.stringify(sum.innerHTML));

        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        window.location.href = "confirmation.html";
      }
    });
  });
});
