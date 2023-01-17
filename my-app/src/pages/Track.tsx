import { useUser } from '../hook/user';
import { useState } from "react";
import './track.css'

export function Track() {
  const {trackOrder} = useUser();
  const [orderLeft, setOrderLeft] = useState(false);
  const [arrivedPostOffice, setArrivedPostOffice] = useState(false);
  const [leftPostOffice, setLeftPostOffice] = useState(false);
  const [orderDelivered, setOrderDelivered] = useState(false);

  function HandleOrderLeft(){
    setOrderLeft(true);
  }

  function HandleArrivedPostOffice(){
    setArrivedPostOffice(true);
  }

  function HandleLeftPostOffice(){
    setLeftPostOffice(true);
  }
  
  function HandleOrderDelivered(){
    setOrderDelivered(true);
  }

  if (trackOrder) {
    setTimeout(HandleOrderLeft, 3000);
    setTimeout(HandleArrivedPostOffice, 4000);
    setTimeout(HandleLeftPostOffice, 6000);
    setTimeout(HandleOrderDelivered, 10000);
  }

  return (
      <>
        <section className="track">
          <div className="container">
            <h1>Track my order</h1>
            <p>Track where your order is until it arrives at your home!</p>
            { trackOrder? (
              <>
                <div className="progress f_flex">
                  <i className={trackOrder ? "fa-solid fa-circle active" : "fa-solid fa-circle"}></i>
                  <div className={orderLeft ? "line active" : "line"}></div>
                  <i className={orderLeft ? "fa-solid fa-circle active" : "fa-solid fa-circle"}></i>
                  <div className={arrivedPostOffice ? "line active" : "line"}></div>
                  <i className={arrivedPostOffice ? "fa-solid fa-circle active" : "fa-solid fa-circle"}></i>
                  <div className={leftPostOffice ? "line active" : "line"}></div>
                  <i className={leftPostOffice ? "fa-solid fa-circle active" : "fa-solid fa-circle"}></i>
                  <div className={orderDelivered ? "line active" : "line"}></div>
                  <div className={orderDelivered ? "circle active" : "circle"}><div className="done"></div></div>
                </div>
                <div className="texts">
                  <ul>
                    <li>Separating the order</li>
                    <li>The order left the store</li>
                    <li>Arrived at the post office</li>
                    <li>Left the post office</li>
                    <li>Order delivered</li>
                  </ul>
                </div>
              </>
            ) : (
              <span>No products on the way</span>
            )}
            
          </div>
        </section>
      </>
    );
}  