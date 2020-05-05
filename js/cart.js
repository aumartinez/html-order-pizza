//JS Script
"use strict";

window.addEventListener("load", function(){
  let start = setTimeout(cartcalc, 100);
},false);

function cartcalc() {
  //Cart alert
  
  calc_subtotal();
  
  let minus = document.querySelectorAll(".order-items .minus");
  let numbers = document.querySelectorAll(".order-items .numbers");
  let plus = document.querySelectorAll(".order-items .plus");
  
  addEventListenerToList(minus, "click", function(){minushandler(event);});
  addEventListenerToList(plus, "click", function(){plushandler(event);});
  
  function minushandler(event) {
    let elem_cont = event.target.offsetParent
    let elem_target = elem_cont.querySelector(".number");
    let hidden_target = elem_cont.querySelector(".hidden-qty");
    let item_qty = parseInt(elem_target.innerText);
    
    if (item_qty > 1) {
      item_qty = item_qty - 1;
    }
    
    elem_target.innerText = item_qty;
    hidden_target.value = item_qty;
    calc_subtotal();
  }
  
  function plushandler(event) {    
    let elem_cont = event.target.offsetParent
    let elem_target = elem_cont.querySelector(".number");
    let hidden_target = elem_cont.querySelector(".hidden-qty");
    let item_qty = parseInt(elem_target.innerText);
    
    if (item_qty < 99) {
      item_qty = item_qty + 1;
    }
    
    elem_target.innerText = item_qty;
    hidden_target.value = item_qty;
    calc_subtotal();
  }
  
  function calc_subtotal() {
    let items = document.querySelectorAll(".order-items > div");
    
    if (items.length == 0){
      return;
    }
    
    let subtotal = 0;
    
    for (let i = 0; i < items.length; i++) {
      let item_qty = parseInt(items[i].querySelector(".number").innerText);
      let item_price = parseFloat(items[i].querySelector(".item-price > p > span:last-child").innerText);
      let oper = item_qty * item_price;
      subtotal = subtotal + oper;
    }   
    
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("total").innerText = subtotal.toFixed(2);
    
    let exchange = 1.10;
    let dollars = subtotal * exchange;
    
    document.getElementById("dollar-total").innerText = dollars.toFixed(2);
  }
  
  function addEventListenerToList(list, evt, func) {
    let arr = list;
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener(evt, func, false);
      }
    }
  }
}

//AJAX handler

$(document).ready(function(){
  
  let start = setTimeout(function(){    
    
    $(".update-control").on("click", function(e){
     let url = "/update";
     let elem_cont = e.target.offsetParent;
     let mess = elem_cont.querySelector(".mess");
     let $mess = $(mess).addClass("dummy");
     
     let data = {
       "_token": $('input[name="_token"]').val(),
       "prod_id": elem_cont.querySelector(".hidden-product").value,
       "item_qty": elem_cont.querySelector(".hidden-qty").value
     }
              
     let posting = $.post(url, data);
     
     posting.done(function(response){         
         $mess.addClass("alert-success");
         $mess.addClass("active");
         $mess.text("Item updated");
         setTimeout(function(){$mess.removeClass("active");},2000);
       }).fail(function(response){
         $mess.addClass("alert-danger");
         $mess.addClass("active");
         $mess.text("Server error, try again");
         setTimeout(function(){$mess.removeClass("active");},2000);
       });
   }); 
  }, 2000);
   
 });