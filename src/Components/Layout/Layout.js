import React, { Fragment } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../Routers/Routers.js";
import Carts from "../UI/Cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <Fragment>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
