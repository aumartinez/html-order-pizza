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
       }).fail(function(response){
         $("#mess").addClass("alert-danger");
         $("#mess").addClass("active");
         $("#mess").text("Server error, try again");
       });
       
       $get_url("/ws/items")
       
       $.get(get_url, function(data, status){
        $("#ajax").text(data);
       });
     }
   );
   
 });