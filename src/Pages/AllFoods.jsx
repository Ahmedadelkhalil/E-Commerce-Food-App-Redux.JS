import React, { useState } from "react";
import CommonSection from "../Components/UI/Common/CommonSection";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import products from "../Assets/data/Products.js";
import ProductCart from "../Components/UI/ProductCart/ProductCard.jsx";
import ReactPaginate from "react-paginate";
import "../Styles/AllFoods.css";
import "../Styles/paginationbtns.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const searchedProducts = products.filter((item) => {
    // if (searchTerm === "") return item;
    // if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //   return item;
    return item;
  });
  const productsPerPage = 12;
  const visitedPage = pageNumber * productsPerPage;
  const displayPage = searchedProducts.slice(
    visitedPage,
    visitedPage + productsPerPage
  );
  const pageCount = Math.ceil(searchedProducts.length / productsPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />
      <Container>
        <Row className="mt-4">
          <Col ld="6" md="6" sm="6" xs="12">
            <div className="search-widget d-flex align-items-center justify-content-between w-100 ">
              <input
                type="text"
                placeholder="Im Looking For ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-100"
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col ld="6" md="6" sm="6" xs="12">
            <div className="sorting-widget text-end w-100">
              <select className="w-100">
                <option disabled selected hidden>
                  Default
                </option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="hight">High Price</option>
                <option value="low">Low Price</option>
              </select>
            </div>
          </Col>

          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCart item={item} />
            </Col>
          ))}

          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={pageChange}
              nextLabel="Next"
              previousLabel="Previous"
              containerClassName="paginationbtns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default AllFoods;
