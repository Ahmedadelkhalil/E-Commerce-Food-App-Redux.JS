import React, { useState, useEffect } from "react";
import Products from "../Assets/data/Products.js";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet.js";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import { useDispatch } from "react-redux";
import { addingToCart } from "../Store/Shopping/CartSlice.js";
import ProductCart from "../Components/UI/ProductCart/ProductCard.jsx";
import "../Styles/FoodDetails.css";
import "../Styles/ProductCard.css";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);
  const [imgPreview, setImgPreview] = useState(product.image01);
  const { title, price, image01, category, desc } = product;

  const relevantProducts = Products.filter(
    (item) => category === item.category
  );

  const dispatch = useDispatch();
  const addingDetailedProductToCart = () => {
    dispatch(
      addingToCart.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setImgPreview(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const preventSubmittind = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Food-Details">
      <CommonSection title={title} />

      <Container>
        <Row className="mt-5">
          <Col lg="2" md="2" className="small_imgs_sample py-4">
            <div
              className="item_img"
              onClick={() => setImgPreview(product.image01)}
            >
              <img
                src={product.image01}
                alt="product-left-img"
                className="w-50"
              />
            </div>
            <div
              className="item_img"
              onClick={() => setImgPreview(product.image02)}
            >
              <img
                src={product.image02}
                alt="product-left-img"
                className="w-50"
              />
            </div>
            <div
              className="item_img"
              onClick={() => setImgPreview(product.image03)}
            >
              <img
                src={product.image03}
                alt="product-left-img"
                className="w-50"
              />
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="product_main_img">
              <img src={imgPreview} alt="main img" className="w-100 " />
            </div>
          </Col>
          <Col lg="6" md="6" className="mt-5">
            <div className="product_info">
              <h2 className="product_title_info mb-3">{title}</h2>
              <p className="Product_price_info d-flex align-items-center gap-3 mb-3">
                Price : <span>${price}</span>
              </p>
              <p className="product_category_info d-flex align-items-center gap-4">
                Category : <span>{category}</span>
              </p>
              <button
                className="addToCard__btn"
                onClick={addingDetailedProductToCart}
              >
                Add To Cart
              </button>
            </div>
          </Col>
          <Col
            lg="12"
            className="Tabs d-flex align-items-center gap-5 mb-5 mt-5"
          >
            <h6
              className={`pb-3 ${tab === "desc" ? "active_review" : ""}`}
              onClick={() => setTab("desc")}
            >
              Description
            </h6>
            <h6
              className={`pb-3 ${tab === "prev" ? "active_review" : ""}`}
              onClick={() => setTab("prev")}
            >
              Review
            </h6>
          </Col>

          {tab === "desc" ? (
            <Col ld="12" className="mb-5">
              <div className="desc_title">
                <p>{desc}</p>
              </div>
            </Col>
          ) : (
            <div>
              <Col lg="12" className="mb-5">
                <div className="reviews">
                  <div className="personal_review">
                    <h6 className="name_review">Ahmed Adel</h6>
                    <p className="email_review">ahmed123@gmail.com</p>
                    <p className="des_review">Great Product</p>
                  </div>
                  <div className="personal_review">
                    <h6 className="name_review">Zeyad Tarek</h6>
                    <p className="email_review">zeyad123@gmail.com</p>
                    <p className="des_review">Delicious And So Tasty</p>
                  </div>
                  <div className="personal_review">
                    <h6 className="name_review">Farida Ahmed</h6>
                    <p className="email_review">farida123@gmail.com</p>
                    <p className="des_review">
                      I Have Never Try This Delicious Sandwitch Before
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="12" className="mb-5">
                <div className="form">
                  <form onSubmit={preventSubmittind}>
                    <div className="input-control mb-4">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="input-control mb-4">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div className="input-control mb-5">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write Your Review"
                      />
                    </div>
                    <button className="addToCard__btn" type="Submit">
                      Submit
                    </button>
                  </form>
                </div>
              </Col>
            </div>
          )}

          <Col lg="12" className="mb-4">
            <h2 className="products_you_may_like_title">
              Products You May Like ...
            </h2>
          </Col>
          {relevantProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-5">
              <ProductCart item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Helmet>
  );
};

export default FoodDetails;
