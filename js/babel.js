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

//BootStrap grid

const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;

const Container = (
  <Grid>
  </Grid>
);

const ContainerFluid = (
  <Grid fluid={true}>
  </Grid>
);

const MyRow = (
  <Row>
  </Row>
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