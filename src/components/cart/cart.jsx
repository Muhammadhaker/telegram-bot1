import React from "react";
import "./cart.css";
import Button from "./../button/button";

// Narxlarni hisoblovchi funksiya
export const totalPrice = (arr) => {
  return arr.reduce((a, c) => a + c.price * c.quantity, 0);
};

const Cart = ({ cartItems,onCheckout }) => {
  return (
    <div className="cart_container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

     <Button
  title={cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}
  disabled={cartItems.length === 0}
  type="checkout"
  onClick={onCheckout}
/>
    </div>
  );
};

export default Cart;
