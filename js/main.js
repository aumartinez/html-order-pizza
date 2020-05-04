//JS Script
"use strict";

window.addEventListener("load", run, false);

function run() {
  //Cart alert
  let start = setTimeout(function(){
    let items = parseInt(document.getElementById("ajax").innerText);
    let bell = document.querySelector("#bell i");
    
    if (items != 0) {    
      addClass(bell, "active");
    }
    else {
      removeClass(bell, "active");
    }
  }, 2000);
  
  
  //Map button
  let map_btn = document.getElementById("map-btn");
  
  if (map_btn != null) {
    map_btn.addEventListener("click", function(){
      let scrollIt = setTimeout(function(){
      console.log("scrolled");
      document.documentElement.scrollTo({
          left: 0,
          top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
          behavior: 'smooth'
        });
      }, 500);
    }, false);
  }
  
  //Add item function
  let prod_form = document.getElementById("add-item");
  
  if(prod_form != null) {
    let minus_btn = document.getElementById("minus-1");
    let plus_btn = document.getElementById("plus-1");    
    let value_input = document.getElementById("item_qty");
    
    minus_btn.addEventListener("click", minus_handler, false);
    plus_btn.addEventListener("click", plus_handler, false);
    
    let span = document.getElementById("number");
    
    window.addEventListener("click", change_handler, false);
    
    function change_handler() {
      let item_value = parseInt(document.getElementById("number").innerText);
      
      if (item_value > 99) {
        item_value = 99;
        span.innerText = item_value;
        
        value_input.value = item_value;
      }
    }
    
    function minus_handler() {
      let item_value = parseInt(document.getElementById("number").innerText);
      
      if (item_value > 1) {
        item_value = item_value - 1;
        span.innerText = item_value;
        
        value_input.value = item_value;
      }
    }
    
    function plus_handler() {
      let item_value = parseInt(document.getElementById("number").innerText);      
      
      if (item_value < 99) {
        item_value = item_value + 1;
        span.innerText = item_value;
          
        value_input.value = item_value;
      }
      else {
        item_value = 99;
        span.innerText = item_value;
          
        value_input.value = item_value;
      }
    }
    
  }
  
  function addClass (elem, myClass) {
    if (elem.classList) {
      elem.classList.add(myClass);
    }
    else {
      let arr = elem.className.split(" ");
      let i = arr.indexOf(myClass);
      if (i == -1) {
        arr.push(myClass);
        elem.className = arr.join(" ");
      }
    }
  }

  function removeClass (elem, myClass) {
    if (elem.classList) {
      elem.classList.remove(myClass);
    }
    else {
      let arr = elem.className.split(" ");
      let i = arr.indexOf(myClass);
      if (i >= 0) {
        arr.splice(i, 1);
        elem.className = arr.join(" ");
      }
    }
  }
}