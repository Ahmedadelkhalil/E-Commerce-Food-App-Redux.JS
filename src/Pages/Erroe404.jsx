import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/Error.css";
import "../Styles/ProductCard.css";

const Erroe404 = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" md="12" sm="12" xs="12" className="mt-5">
          <h1 className="error_main_title text-center">Oops!</h1>
          <p className="text-center erro_not_found_text mt-3 mb-4">
            404 Page Not Found
          </p>
          <p className="error_desc text-center">
            the page you looking for might have been removed , its name changed
            or its temporarily unavailable .
          </p>
          <div className="text-center mt-5 mb-5">
            <button className="addToCard__btn">
              <Link to="/home">Go To Home Page</Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Erroe404;
