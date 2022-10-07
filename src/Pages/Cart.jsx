import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { addingToCart } from "../Store/Shopping/CartSlice.js";
import { Link } from "react-router-dom";
import "../Styles/CartPage.css";
import "../Styles/ProductCard.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmout);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your Cart Is Empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Tilte</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-5">
                <h6 className="subtotal_cart_page">
                  Subtotal : $ <span>{total}</span>
                </h6>
                <p>Takes and Shipping will be calculate at your checkout</p>
                <div className="cart_page_btns">
                  <button className="me-2">
                    <Link to="/foods" className="addToCard__btn">
                      Continue Shopping
                    </Link>
                  </button>
                  <button>
                    <Link to="/checkout" className="addToCard__btn">
                      Proceed To Checkout
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deletion = () => {
    dispatch(addingToCart.deleteItem(id));
  };
  return (
    <tr>
      <td className="table_image_cart_page">
        <img src={image01} alt="img_product" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td>
        <i class="ri-delete-bin-line" onClick={deletion}></i>
      </td>
    </tr>
  );
};

export default Cart;
