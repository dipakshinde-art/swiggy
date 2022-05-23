import { useState } from "react";
import "./App.css";
import Filters from "./Component/Filters";
import Navbar from "./Component/Navbar";
import Offers from "./Component/Offers";
import Resturents from "./Component/Resturents";
import userinfo from "./data/navbar.json";
import offerdata from "./data/offer.json";
import resdata from "./data/restaurent.json";

const filtersValues = [
  "Cost High to Low",
  "Cost Low to High",
  "Ratings",
  "Delivery Time",
  "Relevance",
];
function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(resdata);

  const updateFilter = (newFilter) => {
    console.log(newFilter);

    switch (newFilter) {
      case "Cost High to Low": {
        setFilterBy("Cost High to Low");
        data.sort((a, b) => b.costfortwo - a.costfortwo);
        setData([...data]);
        //  console.log(data.map((d) => d.costfortwo));
        console.log(setData([...data]));
        break;
      }
      case "Cost Low to High": {
        setFilterBy("Cost Low to High");
        data.sort((a, b) => a.costfortwo - b.costfortwo);
        // console.log(data.map((d) => d.costfortwo));
        setData([...data]);
        console.log(setData([...data]));
        break;
      }
      case "Ratings": {
        setFilterBy("Ratings");
        data.sort((a, b) => b.rating - a.rating);
        // console.log(data.map((d) => d.costfortwo));
        setData([...data]);
        console.log(setData([...data]));
        break;
      }

      case "default": {
         setData(resdata);
        break;
      }
    }
  };
  return (
    <div>
      <Navbar userinfo={userinfo} />
      <Offers offerdata={offerdata} />
      <section className="near-you">
        <Filters
          updateFilter={updateFilter}
          currentFilter={filterBy}
          filtersValues={filtersValues}
        />
        <Resturents resdata={resdata} />
      </section>
    </div>
  );
}

export default App;
