import React, { useRef } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";
import "../Styles/FoodDetails.css";

const Login = () => {
  const useremailRef = useRef();
  const userpasswordRef = useRef();
  const userInfo = [];

  const submitHandler = (e) => {
    e.preventDefault();
    const showingUserEmailInConsole = useremailRef.current.value;
    const showingUserPasswordInConsole = userpasswordRef.current.value;
    const dataCollected = {
      Email: showingUserEmailInConsole,
      Password: showingUserPasswordInConsole,
    };
    userInfo.push(dataCollected);
    console.log(userInfo);
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div className="form mb-4">
                <form onSubmit={submitHandler}>
                  <div className="input-control mb-3">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      ref={useremailRef}
                    />
                  </div>
                  <div className="input-control mb-3">
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      ref={userpasswordRef}
                    />
                  </div>
                  <button type="submit" className="addToCard__btn mt-2">
                    Login
                  </button>
                </form>
              </div>
              <Link to="/register">
                Dont Have An Account ? Create An Account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
