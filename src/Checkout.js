import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvide";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisment "
        />
        <div>
          <h3 className="checkout_username">Hellow {user?.email.split('@',1)}</h3>
          <h2 className="checkout_title">Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
        <h2>I am Subtotal</h2>
      </div>
    </div>
  );
}
export default Checkout;
