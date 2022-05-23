import React from "react";

function Offers(props) {
//  console.log(props);
  return (
    <section className="offers">
      <div className="container">
        {props.offerdata.map((offer, index) => {
          return <img key={index} className="offer" src={offer} />;
        })}


        {/* <img className="offer" src={offer2} />
        <img className="offer" src={offer3} />
        <img className="offer" src={offer4} /> */}
      </div>
    </section>
  );
}

export default Offers;
