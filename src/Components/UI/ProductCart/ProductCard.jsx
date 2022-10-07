import React from "react";
import "../../../Styles/ProductCard.css";
import { Link } from "react-router-dom";
import { addingToCart } from "../../../Store/Shopping/CartSlice";
import { useDispatch } from "react-redux";

const ProductCart = (props) => {
  const { id, price, title, image01 } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addingToCart.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product__card" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCard__btn" onClick={addToCart}>
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
