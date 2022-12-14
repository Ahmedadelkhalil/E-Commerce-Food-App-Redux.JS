import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../../../Styles/CartTopCorner.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiAction } from "../../../Store/Shopping/CartUiSlice";

const Carts = () => {
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(cartUiAction.toggle());
  };

  const cartProducts = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmout);

  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close_icon">
          <span onClick={closeCart}>
            <i class="ri-close-line"></i>
          </span>
        </div>
        <div className="cart_item_list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No items added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal Amount : <span>${totalAmount}</span>
          </h6>
          <button className="rounded">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
