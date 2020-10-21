import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492667_.jpg'
          alt=''
        ></img>
        <div className='checkout_basket'>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your shopping basket</h2>
          {basket.map((item) => (
            <FlipMove
              staggerDelayBy={150}
              enterAnimation={{
                from: {
                  transform: "rotateX(180deg)",
                  opacity: 0.1,
                },
                to: {
                  transform: "",
                },
              }}
              leaveAnimation={{
                from: {
                  transform: "",
                },
                to: {
                  transform: "rotateX(-120deg)",
                  opacity: 0.1,
                },
              }}
            >
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            </FlipMove>
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
