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
                <a className="navbar-brand brand" href="#">
                  DeliPizza
                </a>
                
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".mobile" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              
              <div id="navbar" className="navbar-collapse pull-right collapse mobile">
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
                    1 505 12345678
                  </p>
                </div>
                
                <div className="order-ready pull-left">
                  <a href="#" className="bg-secondary"><span><i className="po po-scooter"></i></span> Ready to order?</a>
                  <p id="bill">                    
                    <span>0</span> <span>items</span> <span>€18.00</span>                    
                  </p>
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

//Featured

const FeaturedCont = () => (
  <Cont>    
    <Row>
      <Col sm={6} md={6} className="bg-featured-01">
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
      
      <Col sm={3} md={3} className="bg-featured-02">
        <div className="caption">
          <h3 className="text-uppercase">
            Free
          </h3>
          <h4 className="text-uppercase">
            Fries            
          </h4>
          <p className="text-uppercase">
            For online orders on Wednesdays
          </p>
        </div>
      </Col>
      
      <Col sm={3} md={3} className="bg-featured-03">
        <div className="caption">
          <h3 className="text-uppercase">
            Iced<br className="visible-xs" /> Coffee
          </h3>
          <h4 className="text-uppercase">
            Summers
          </h4>
          <p className="text-uppercase">
            Only in local
          </p>
        </div>
      </Col>
      
      <Col sm={6} md={6} className="bg-featured-04">
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
    pic: "img/pizza-08.png",
    title: "Summer Pizza",
    caption: "Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemmon Pepper",
    link: "/pizza/summerpizza"
  },
  {
    id: "2",
    pic: "img/pizza-01.png",
    title: "Apricot Chicken",
    caption: "Crispy bacon, tasky ham, pineapple, onion and stretchy mozzarella, finished with BBQ swirl.",
    link: "/pizza/apricot"
  },
  {
    id: "3",
    pic: "img/pizza-07.png",
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
        <Col xs={12}>
          <div className="featured-title">
            <h2 className="text-center">
              Pizza sets
            </h2>
          </div>
        </Col>
      </Row>
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
        3: "Veggie Lover"
      }
    ]
  }
];

function PromoList() {
  const list = TodayPromotion[0].pizzas[0]; 
  const arr = Object.keys(list).map((key)=>{return [list[key]]});

  const pizzalist = arr.map((item)=>{
    return (
      <li>
        {item}
      </li>
    );
  });
  
  return (
    <ul className="pizza-promo">{pizzalist}</ul>
  );
}

function Promotion(props) {
  const item = props.todaypromo;
  
  return(
    <Cont>
      <Row>
        <Col xs={12} sm={4} className="col-center">
          <div className="promo-wrapper">
            <div className="promo-caption">
              <h2 className="text-center">
                {item[0].title}
              </h2>
              <small>min order</small>
              <p>              
                {item[0].price}
              </p>
              <PromoList />
            </div>
          </div>
        </Col>
      </Row>
    </Cont>
  );
}

ReactDOM.render(
  <Promotion todaypromo = {TodayPromotion}/>,
  document.getElementById("promotion"),
);

//Today pizza

const TodayPizza = {
  id: "",
  pic: "img/pizza-03.png",
  title: "Pepperoni Pizza",
  caption: "Extra-Virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.",
  link: "/pizza/pepperoni"
}

function TodayFeatured(props) {
  const item = props.todaypizza;
  
  return(
    <Cont>
      <Row>
        <Col sm={8} className="col-sm-push-4 today-pizza-bg">
          <img src={item.pic} alt={item.title} className="img-responsive" />
        </Col>
        <Col sm={4} className="col-sm-pull-8">
          <div className="todaypizza-card">
            <div className="todaypizza-caption">
              <p>
                {item.caption}
              </p>
              <a href={item.link} className="btn btn-primary" title={item.title}>
                Order now
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Cont>
  );
}

ReactDOM.render(
  <TodayFeatured todaypizza = {TodayPizza}/>,
  document.getElementById("today-pizza"),
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