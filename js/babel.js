"use strict";

const Cont = ReactBootstrap.Container;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;

//Header

const Header = () => (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  DeliPizza
                </a>
                
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              
              <div id="navbar" className="navbar-collapse pull-right collapse">
                <ul className="nav navbar-nav pull-left">
                  <li className="active">
                    <a href="#">Order online</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>                
                </ul>
              
                <div className="phone-info pull-left">
                  <p className="phone-call">
                    Prefer to order by phone? Call Us!
                  </p>
                  <p className="phone-number">
                    1 505 25225555
                  </p>
                </div>
                
                <div className="order-ready pull-left">
                  <a href="#" className="bg-secondary"><span><i></i></span> Ready to order?</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
);

ReactDOM.render(
  <Header />,
  document.querySelector("header"),
);

//Featured

const FeaturedCont = () => (
  <Cont>
    <Row>
      <Col md={6} className="bg-featured-01">
        <div className="caption">
          <h3 className="text-uppercase">
            Grilled Chicken
          </h3>
          <h4 className="text-uppercase">
            Summer Pizza
          </h4>
          <a className="btn btn-primary">
            Buy this now
          </a>
        </div>
      </Col>
      
      <Col xs={6} md={3} className="bg-featured-02">
        <div className="caption">
          <h3 className="text-uppercase">
            Free
          </h3>
          <h4 className="text-uppercase">
            Fries            
          </h4>
          <p className="text-uppercase">
            For online order in Wednesdays
          </p>
        </div>
      </Col>
      
      <Col xs={6} md={3} className="bg-featured-03">
        <div className="caption">
          <h3 className="text-uppercase">
            Iced<br /> Coffee
          </h3>
          <h4 className="text-uppercase">
            Summers
          </h4>
          <p className="text-uppercase">
            Only in local
          </p>
        </div>
      </Col>
      
      <Col md={6} className="bg-featured-04">
        <div className="caption">
          <h3 className="text-uppercase">
            Order Online
          </h3>          
        </div>
      </Col>
    </Row>
  </Cont>
);

ReactDOM.render(
  <FeaturedCont />,
  document.getElementById("featured"),
);

//Pizzas sets

const HomePizzas = [
  {
    id: "1",
    pic: "img/pizza-01.png",
    title: "Summer Pizza",
    caption: "Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemmon Pepper",
    link: "/pizza/summerpizza"
  },
  {
    id: "2",
    pic: "img/pizza-02.png",
    title: "Apricot Chicken",
    caption: "Crispy bacon, tasky ham, pineapple, onion and stretchy mozzaerlla, finished with BBQ swirl.",
    link: "/pizza/apricot"
  },
  {
    id: "3",
    pic: "img/pizza-03.png",
    title: "Pepperoni Pizza",
    caption: "Extra-Virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.",
    link: "/pizza/pepperoni"
  },
];

function SetsCont(props) {
  const list = props.homepizzas;
  const homepizzasList = list.map((item)=>{
    return(
      <Col sm={4}>
        <div className="pizza-card">
          <img src={item.pic} className="img-responsive" alt={item.title} />
          <h4>
            {item.title}
          </h4>
          
          <div clas="card-caption">
            {item.caption}
          </div>
          
          <div className="hover-btn">
            <a href={item.link} className="btn btn-primary">
              Take a look!
            </a>
          </div>
        </div>
      </Col>
    );
  });
  
  return(
    <Cont>
      <Row>
        {homepizzasList}
      </Row>
    </Cont>
  );
}

ReactDOM.render(
  <SetsCont homepizzas = {HomePizzas}/>,
  document.getElementById("pizza-sets"),
);


//Promotional offer

const TodayPromotion = [
  {
    id: "1",
    title: "Free delivery",
    advert: "with any of today's pizza",
    price: "€9.99",
    pizzas: [
      {
        1: "Chicken Hawaii",
        2: "Summer Pizza",
        3: "Vegge Lover"
      }
    ]
  }
];

function PromoList() {
  const list = TodayPromotion[0].pizzas;
  const pizzalist = "";
  
  return (
    <ul className="pizza-promo">{pizzalist}</ul>
  );
}

function Promotion(props) {
  const items = props.todaypromo;
  
  return(
    <Cont>
      <Row>
        <Col xs={12} sm={4} className="col-center">
          <h2 className="text-center">
            {items[0].title}
          </h2>
          <p>
            {items[0].price}
          </p>
          <PromoList />
        </Col>
      </Row>
    </Cont>
  );
}

ReactDOM.render(
  <Promotion todaypromo = {TodayPromotion}/>,
  document.getElementById("promotion"),
);


//Goodies list

const Goodies = [
  {
    id: "1",
    icon: "po po-pizza",
    name: "Pizza",
    link: "#"
  },
  {
    id: "2",
    icon: "po po-burger",
    name: "Burgers",
    link: "#"
  },
  {
    id: "3",
    icon: "po po-salads",
    name: "Salads",
    link: "#"
  },
  {
    id: "4",
    icon: "po po-tacos",
    name: "Tacos",
    link: "#"
  },
  {
    id: "5",
    icon: "po po-wraps",
    name: "Wraps",
    link: "#"
  },
  {
    id: "6",
    icon: "po po-fries",
    name: "Fries",
    link: "#"
  },
  {
    id: "7",
    icon: "po po-drinks",
    name: "Drinks",
    link: "#"
  },
];

function GoodiesIcons(props) {
  const list = props.goodies;
  const goodiesList = list.map((item)=>{
    return(
      <li key={item.id}>
        <a href={item.link} title={item.name}>
          <span className={item.icon}></span>
          <span>{item.name}</span>
        </a>
      </li>
    );
  });
  
  return(
    <ul>{goodiesList}</ul>
  );
}

ReactDOM.render(
  <GoodiesIcons goodies = {Goodies} />,
  document.getElementById("goodies-nav"),
);

//Social icons list

const Social = [
  {
    id: "1",
    icon: "fa fa-facebook",
    name: "Facebook",
    link: "#"
  },
  {
    id: "2",
    icon: "fa fa-twitter",
    name: "Twitter",
    link: "#"
  },
  {
    id: "3",
    icon: "fa fa-instagram",
    name: "Instagram",
    link: "#"
  },
  {
    id: "4",
    icon: "fa fa-youtube",
    name: "Youtube",
    link: "#"
  },
];

function SocialIcons(props) {
  const list = props.social;
  const socialList = list.map((item)=>{
    return(
      <li key={item.id}>
        <a href={item.link} title={item.name}>
          <span className={item.icon}></span>
          <span className="sr-only">{item.name}</span>
        </a>
      </li>
    );
  });
  
  return(
    <ul>{socialList}</ul>
  );
}

ReactDOM.render(
  <SocialIcons social = {Social} />,
  document.getElementById("social-nav"),
);