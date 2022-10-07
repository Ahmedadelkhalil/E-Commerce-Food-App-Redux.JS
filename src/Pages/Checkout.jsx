import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import Helmet from "../Components/Helmet/Helmet.js";
import "../Styles/Checkout.css";
import "../Styles/FoodDetails.css";
import "../Styles/ProductCard.css";

const Checkout = () => {
  const currentTotalAmount = useSelector((state) => state.cart.totalAmout);
  const shippingCost = 30;
  const grossCost = currentTotalAmount + Number(shippingCost);

  const [username, setUserName] = useState();
  const [useremail, setUserEmail] = useState();
  const [usernumber, setUserNumber] = useState();
  const [usercountry, setUserCountry] = useState();
  const [usercity, setUserCity] = useState();
  const [userpostalcode, setUserPostalcode] = useState();

  const userInfo = [];

  const submittingHandler = (e) => {
    e.preventDefault();
    const collectingUserInfoToSend = {
      username,
      useremail,
      usernumber,
      usercountry,
      usercity,
      userpostalcode,
    };
    userInfo.push(collectingUserInfoToSend);
    console.log(userInfo);
  };
  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="text-center checkout_title mb-3">
                Shipping Address
              </h6>
              <form onSubmit={submittingHandler}>
                <div className="form w-100 bg-white">
                  <div className="input-control">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="number"
                      placeholder="Enter Your Phone Number"
                      required
                      onChange={(e) => setUserNumber(e.target.value)}
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="text"
                      placeholder="Country"
                      required
                      onChange={(e) => setUserCountry(e.target.value)}
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      onChange={(e) => setUserCity(e.target.value)}
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="number"
                      placeholder="Postal Code"
                      required
                      onChange={(e) => setUserPostalcode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button className="addToCard__btn mt-4" type="submit">
                    Payment
                  </button>
                </div>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="price_calculating_area">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Products Cost : <span>$ {currentTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping Cost: <span>$ {shippingCost}</span>
                </h6>
                <div className="gross-area">
                  <h6 className="d-flex align-items-center justify-content-between">
                    Gross Cost : <span>$ {grossCost}</span>
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
