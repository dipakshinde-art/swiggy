import React from "react";

function ResComp(props) {
 // console.log("resc", props.Resturent);
  return (
    <div className="card">
      <img width="254" height="160px" src={props.Resturent.image} />
      <div className="restaurant-details">
        <div className="restaurant-title">{props.Resturent.name}</div>
        <div className="restaurant-subtitle">{props.Resturent.category.join(" , ")}</div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-ratings">
          <i className="material-icons star-icon">star</i>{" "}
          {props.Resturent.rating}
        </div>
        
        <div className="restaurant-delivery-timings">
          {props.Resturent.deliveryTimings}
        </div>{" "}
        
        <div className="restaurant-cost-for-two">
          {props.Resturent.costfortwo}
        </div>
      </div>
      <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text"> {props.Resturent.offers.join(" | ")}</span>
      </div>
    </div>
  );
}

export default ResComp;
