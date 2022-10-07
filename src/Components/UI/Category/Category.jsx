import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryItem01 from "../../../Assets/images/category-01.png";
import categoryItem02 from "../../../Assets/images/category-02.png";
import categoryItem03 from "../../../Assets/images/category-03.png";
import categoryItem04 from "../../../Assets/images/category-04.png";
import "../../../Styles/Category.css";

const Category = () => {
  const categoryData = [
    {
      display: "Fast Food",
      imgUrl: categoryItem01,
    },
    {
      display: "Pizza",
      imgUrl: categoryItem02,
    },
    {
      display: "Asian Food",
      imgUrl: categoryItem03,
    },
    {
      display: "Row Meat",
      imgUrl: categoryItem04,
    },
  ];
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
            <div
              className="category__item d-flex align-items-center gap-3"
              key={index}
            >
              <div className="img__url">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
