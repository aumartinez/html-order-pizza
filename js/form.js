//JS Script
"use strict";

$(document).ready(function(){
    
   let url = $("#add-item").attr("action");
   
   $("#add-item").submit(
     function(e){
       e.preventDefault();
       
       let data = {
         "_token" : $('input[name="_token"]').val(),
         "prod_id": $("#prod_id").val(),
         "item_qty": $("#item_qty").val()
       }
       
       let posting = $.post(url, data);
       
       posting.done(function(response){         
         $("#mess").addClass("alert-success");
         $("#mess").addClass("active");
         $("#mess").text("Added to cart");
         setTimeout(function(){$("#mess").removeClass("active");}, 2000);
       }).fail(function(response){
         $("#mess").addClass("alert-danger");
         $("#mess").addClass("active");
         $("#mess").text("Server error, try again");
         setTimeout(function(){$("#mess").removeClass("active");}, 2000);
       });
       
       let get_url = "/ws/items";
       
       setTimeout(function(){
         $.get(get_url, function(data, status){
          $("#ajax").text(data);
         });  
       },100);
       
     }
   );
   
 });