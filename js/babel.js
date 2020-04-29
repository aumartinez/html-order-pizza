

//Goodies list

const goodies = [
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
  <GoodiesIcons goodies = {goodies} />,
  document.getElementById("goodies-nav"),
);

//Social icons list

const social = [
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
  <SocialIcons social = {social} />,
  document.getElementById("social-nav"),
);