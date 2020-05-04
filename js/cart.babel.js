"use strict";

const Cont = ReactBootstrap.Container;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;

const scriptsList = document.getElementsByTagName("script");
const jsonList = JSON.parse(scriptsList[scriptsList.length - 1].innerText);

if (jsonList.product) {
  const qtyList = Object.keys(jsonList.product_qty).map((key)=>{return [jsonList.product_qty[key]]});

const filterList = () => {
  for (var i = 0; i < jsonList.product.length; i++) {
    jsonList.product[i][0].item_qty = qtyList[i][0];
  }
}

filterList();  
}


function ShortList(props) {
  const list = props.cart.product;
    
  const cartList = list.map((row)=>{
    return row.map((item)=>{
      return(
      <Row id={"item-" + item.id} key={item.id}>
        <Col sm={3} className="img-center">
          <img src={item.prod_pic} alt={item.prod_name} className="img-responsive" />
        </Col>
        <Col sm={6}>
          <h3>
           {item.prod_name};
          </h3>
          <div className="item-description">
            <p>
             {item.prod_description}
            </p>
          </div>
          <div className="item-price">
            <p>
              <span>Price: </span>
              <span>€</span>
              <span>{item.prod_price}</span>
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div className="pizza-qty">
            <div className="round-item">
              <span className="minus"> - </span>
              <span className="number">{item.item_qty}</span>
              <span className="plus"> + </span>
              <input id={"prod-id-" + item.id} name={"prod-id-" + item.id} type="hidden" value={item.prod_id} className="hidden-product" />
              <input id={"item-qty-" + item.id} name={"item-qty-" + item.id} type="hidden" min="1" max="99" value={item.item_qty} className="hidden-qty" />
            </div>
          </div>
          <div className="cart-controls">
              <button type="button" className="btn btn-primary update-control">
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              </button>
              <button type="button" className="btn btn-primary delete-control" onClick={()=>remove_elem("item-" + item.id)}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
          </div>
          <div className="mess alert">
          </div>
        </Col>        
      </Row>
      );
    })
  });    
  
  return(
    <div>
      <Col sm={9}>
        <div className="order-items">
          {cartList}
        </div>
      </Col>
      <Col sm={3}>
        <div className="order-summary">
          <div className="summary-label bg-primary">
            <h2 className="color-white text-center">
              Order Summary
            </h2>
          </div>
          
          <div className="summary-detail">
            <p>
              <span>Sub total :</span>
              <span id="subtotal">19.90</span>
            </p>
            
            <p>
              <span>Delivery :</span>
              <span id="delivery">0</span>
            </p>
            
            <hr />
            
            <p className="summary-total">
              <span>Total in Euros: </span>
              <span id="total">19.90</span>
            </p>
            
            <p className="dollar-total">
              <span>Total in Dollars: </span>
              <span id="dollar-total">19.90</span>
            </p>
            
            <p>
              <button type="submit" className="btn btn-primary btn-long">
                <i className="po po-scooter"></i> Add Delivery
              </button>
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
}

if (document.getElementById("cart") && jsonList.product.length > 0){
  ReactDOM.render(
    <ShortList cart = {jsonList} />,
    document.getElementById("cart")
  );  
}

function remove_elem(id) {   
  let conf = confirm("Remove item?");
  if (conf == true){
   deleteItem(id);
   cartcalc();
  }
  else {
    return;
  }
}

function deleteItem(id) {
  let data = {
       "_token": $('input[name="_token"]').val(),
       "prod_id": $('#'+ id + ' .hidden-product').val()       
     }
     
  let url = "/delete";
  
  let posting = $.post(url, data); 
   posting.done(function(response){         
     document.getElementById(id).remove();
     if($(".order-items > div").length == 0) {
       window.location.reload();
     }
     cartcalc();     
   }).fail(function(response){
     $("#mess").addClass("alert-danger");
     $("#mess").addClass("active");
     $("#mess").text("Server error, try again");
   });
}


