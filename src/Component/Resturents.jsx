import React from 'react'
import ResComp from './ResComp'
function Resturents(props) {
   // console.log("res",props)
  return (
    <div className="container divider">
    <div className="cards">
        {props.resdata.map((Resturent)=>(
            <ResComp key={Resturent.id} Resturent={Resturent}/>
        ))}
        {/* <div className="card">
            <img width="254" height="160px" src={res1} />
            <div className="restaurant-details">
                <div className="restaurant-title">Chaitanya Parathas</div>
                <div className="restaurant-subtitle">North India, Punjabi, Chinese, Thalis Combo, Beverages </div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 33 MINS</div> .
                <div className="restaurant-cost-for-two">₹200 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">20% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res2} />
            <div className="restaurant-details">
                <div className="restaurant-title">MH 12 Pav Bhaji</div>
                <div className="restaurant-subtitle">Snacks, Pizza, Beverages, Steet Food</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.0
                </div>
                 .<div className="restaurant-delivery-timings"> 25 MINS</div> .
                <div className="restaurant-cost-for-two">₹250 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">10% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res3} />
            <div className="restaurant-details">
                <div className="restaurant-title">Lunch Box</div>
                <div className="restaurant-subtitle">North India, Punjabi, Combo, Biryani, Healthy Food, Jain, Thalis </div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.2
                </div>
                 .<div className="restaurant-delivery-timings"> 31 MINS</div> .
                <div className="restaurant-cost-for-two">₹200 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">20% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res4} />
            <div className="restaurant-details">
                <div className="restaurant-title">The Hungry Hippe</div>
                <div className="restaurant-subtitle">Chinese, Italian, Thai</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 2.0
                </div>
                .
                <div className="restaurant-delivery-timings"> 38 MINS</div>
                .
                <div className="restaurant-cost-for-two">₹500 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res5} />
            <div className="restaurant-details">
                <div className="restaurant-title">Ovenstory Pizzas</div>
                <div className="restaurant-subtitle">Pizzas</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.1
                </div>
                 .<div className="restaurant-delivery-timings"> 45 MINS</div> .
                <div className="restaurant-cost-for-two">₹600 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">50% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res6} />
            <div className="restaurant-details">
                <div className="restaurant-title">Starbucks Coffee</div>
                <div className="restaurant-subtitle">Beverages, Ice Cream</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 38 MINS</div> .
                <div className="restaurant-cost-for-two">₹400 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={res7} />
            <div className="restaurant-details">
                <div className="restaurant-title">Starbucks Coffee</div>
                <div className="restaurant-subtitle">Beverages, Ice Cream</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 38 MINS</div> .
                <div className="restaurant-cost-for-two">₹400 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div> */}
    </div>
</div>
  )
}

export default Resturents