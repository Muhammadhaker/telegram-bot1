import React, { useEffect } from "react";
import "./cart.css";
import Button from "./../button/button";

// Narxlarni hisoblovchi funksiya
export const totalPrice = (arr) => {
  return arr.reduce((a, c) => a + c.price * c.quantity, 0);
};

const telegram = window.Telegram.WebApp;

const Cart = ({ cartItems, onCheckout }) => {
  useEffect(() => {
    const total = totalPrice(cartItems);
    if (total > 0) {
      telegram.MainButton.setParams({
        text: `Sotib olish – ${total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`,
      });
      telegram.MainButton.show();
    } else {
      telegram.MainButton.hide(); 
    }
  }, [cartItems]);

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
