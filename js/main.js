//JS Script
"use strict";

window.addEventListener("load", run, false);

function run() {
  let btn = document.getElementById("map-btn");
  
  if (btn != null) {
    btn.addEventListener("click", function(){
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
}