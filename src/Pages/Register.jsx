import React, { useRef } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";
import "../Styles/FoodDetails.css";

const Login = () => {
  const usernameRef = useRef();
  const userageRef = useRef();
  const usercountryRef = useRef();
  const useremailRef = useRef();
  const userpasswordRef = useRef();
  const userInfo = [];

  const submitHandler = (e) => {
    e.preventDefault();
    const showingUserNameInConsole = usernameRef.current.value;
    const showingUserAgeInConsole = userageRef.current.value;
    const showingUserCountryInConsole = usercountryRef.current.value;
    const showingUserEmailInConsole = useremailRef.current.value;
    const showingUserPasswordInConsole = userpasswordRef.current.value;

    const dataCollected = {
      Name: showingUserNameInConsole,
      Age: showingUserAgeInConsole,
      Country: showingUserCountryInConsole,
      Email: showingUserEmailInConsole,
      Password: showingUserPasswordInConsole,
    };
    userInfo.push(dataCollected);
    console.log(userInfo);
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div className="form mb-4">
                <form onSubmit={submitHandler}>
                  <div className="input-control mb-3">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      ref={usernameRef}
                    />
                  </div>
                  <div className="input-control mb-3">
                    <input
                      type="number"
                      placeholder="Enter Your Age"
                      required
                      ref={userageRef}
                    />
                  </div>
                  <div className="input-control mb-3">
                    <input
                      type="text"
                      placeholder="Enter Your Country"
                      required
                      ref={usercountryRef}
                    />
                  </div>
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
                    Register
                  </button>
                </form>
              </div>
              <Link to="/login">Already Have An Account ? Sign In Now</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
