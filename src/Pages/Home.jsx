import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import HeroImg from "../Assets/images/hero.png";
import "../Styles/HeroSection.css";
import { Link } from "react-router-dom";
import Category from "../Components/UI/Category/Category";
import "../Styles/Home.css";
import featureImg01 from "../Assets/images/service-01.png";
import featureImg02 from "../Assets/images/service-02.png";
import featureImg03 from "../Assets/images/service-03.png";

import products from "../Assets/data/Products.js";
import ProductCart from "../Components/UI/ProductCart/ProductCard";
import productCategory01 from "../Assets/images/hamburger.png";
import productCategory02 from "../Assets/images/pizza.png";
import productCategory03 from "../Assets/images/bread.png";
import whyImg from "../Assets/images/location.png";

import networkingImg from "../Assets/images/network.png";

import TestimonialSlide from "../Components/UI/Slider/TestimonialSlide";

const Home = () => {
  const featureData = [
    {
      Display: "Quick Delivery",
      imgUrl: featureImg01,
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quodeum voluptatem illum, dolorum debitis expedita nulla beatae .",
    },
    {
      Display: "Super Dine In",
      imgUrl: featureImg02,
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quodeum voluptatem illum, dolorum debitis expedita nulla beatae .",
    },
    {
      Display: "Easy Pick Up",
      imgUrl: featureImg03,
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quodeum voluptatem illum, dolorum debitis expedita nulla beatae .",
    },
  ];

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteringProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteringProducts);
    }
    if (category === "PIZZA") {
      const filteringProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteringProducts);
    }
    if (category === "BREAD") {
      const filteringProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteringProducts);
    }
  }, [category]);

  const [hotpizza, setHotPizza] = useState([]);

  useEffect(() => {
    const hotFilteringProcess = products.filter(
      (item) => item.category === "Pizza"
    );
    const pizzaSlice = hotFilteringProcess.slice(0, 4);
    setHotPizza(pizzaSlice);
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3 ">Easy way to make an order.</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY ? </span>
                  Just wait <br /> food <span>At your door.</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  eum voluptatem illum, dolorum debitis expedita nulla beatae .
                </p>
              </div>
              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">
                  Order Now <i class="ri-arrow-right-s-line"></i>
                </button>
                <Link to="/foods">
                  <button className="allFood__btn">See All Foods</button>
                </Link>
              </div>
              <div className="service__hero d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>
                  No Shipping Charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% Secure Checkout
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="hero__img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="Feature__title mb-4">What we serve</h5>
              <h2 className="Feature__subtitle">Just sit back at home</h2>
              <h2 className="Feature__subtitle">
                We will <span>Take Care</span>
              </h2>
              <p className="Feature__text mt-4 mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, quia?
              </p>
              <p className="Feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                eum.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="Feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="Feature__item"
                    className="w-25 mb-3"
                  />
                  <h5 className="mb-3 fw-bold">{item.Display}</h5>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center">Popular foods</h2>
            </Col>
            <Col lg="12">
              <div className="product__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`All__Products__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={productCategory01} alt="product__category" />
                  Hamburger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={productCategory02} alt="product__category" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={productCategory03} alt="product__category" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="why__Tasty-Treat-img">
                <img
                  src={whyImg}
                  alt="why__Tasty-Treat-img"
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="why__Tasty-Treat-content">
                <h2 className="why-Tasty-Treat-Title mb-4">
                  Why <span>Tasty Treat ?</span>
                </h2>
                <p className="why-Tasty-Treat-Text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis blanditiis nesciunt dolorem tempora quas quam sed,
                  doloribus iste error nam odio dolores, quod quo. Doloremque
                  voluptas laudantium aperiam assumenda mollitia.
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      food
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit, eligendi.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit, eligendi.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit, eligendi.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotpizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__title mb-4">Testimonial</h5>
                <h2 className="testimonial__subtitle mb-4">
                  What our <span>Customers</span> are saying{" "}
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  reiciendis, animi minus expedita suscipit fugiat molestiae
                  dolore, atque fuga, facilis sint repellat id at pariatur nulla
                  delectus! Minima, perferendis odio.
                </p>
                <TestimonialSlide />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src={networkingImg}
                alt="testimonial_img"
                className="w-100 testimonial_img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
