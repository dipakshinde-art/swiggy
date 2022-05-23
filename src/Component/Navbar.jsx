import React from "react";
import logo from "../asset/logo.svg";

const navMenuoptions = [
  {
    id: 1,
    iconName: "person_outline",
    labelName: " Sign In",
  },
  { id: 2, iconName: "shopping_bag", labelName: "Cart" },
  { id: 3, iconName: "support", labelName: "Help" },
  { id: 4, iconName: "search", labelName: "Search" },
];

function Navbar(props) {
  //  console.log(props)
  return (
    <section className="navbar">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="location">
          <span className="city">{props.userinfo.location.place}</span>
          <span className="state">{props.userinfo.location.state} India</span>
        </div>
        <div className="navbar-options">
          {navMenuoptions.map((navMenuoptions) => (
            <div key={navMenuoptions.id} className="navbar-option">
              <span  className="material-icons">
                {navMenuoptions.iconName}
              </span>
              {navMenuoptions.labelName}
            </div>
          ))}
          {/*                 
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                    <span className="material-icons">search</span> Search
                </div> */}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
