import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../Styles/CartBinItem.css";
import { useDispatch } from "react-redux";
import { addingToCart } from "../../../Store/Shopping/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartIncrease = () => {
    dispatch(
      addingToCart.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const cartDecrease = () => {
    dispatch(addingToCart.removeItem(id));
  };

  const cartDelete = () => {
    dispatch(addingToCart.deleteItem(id));
  };
  const { id, title, image01, price, quantity, totalPrice } = item;
  return (
    <ListGroupItem className="border-0 cart_item_info_holder">
      <div className="cart__item__info d-flex gap-2">
        <img src={image01} alt="product_img" />
        <div className="cart__item__product d-flex align-items-center justify-content-between w-100 gap-4">
          <div>
            <h6 className="card_product_title">{title}</h6>
            <p className="cart_product_price d-flex align-items-center gap-5">
              {quantity}x<span className="cart_item_price">${totalPrice}</span>
            </p>
            <div className=" increase_decrease_btn d-flex align-items-center justify-content-between rounded">
              <span
                className="cart_item_add increase_btn "
                onClick={cartIncrease}
              >
                <i class="ri-add-line"></i>
              </span>
              <span className="cart__item__amount">{quantity}</span>
              <span
                className="cart_item_subtract decrease_btn"
                onClick={cartDecrease}
              >
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="cart_item_delete" onClick={cartDelete}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
