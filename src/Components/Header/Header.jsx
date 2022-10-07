import React, { Fragment, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import Logo from "../../Assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../Styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiAction } from "../../Store/Shopping/CartUiSlice";

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const mobileMenu = () => menuRef.current.classList.toggle("show_menu");

  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartToggle = () => {
    dispatch(cartUiAction.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header-shrink");
      } else {
        headerRef.current.classList.remove("header-shrink");
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);

  const menu__items = [
    {
      Display: "Home",
      path: "/home",
    },
    {
      Display: "Foods",
      path: "/foods",
    },
    {
      Display: "Cart",
      path: "/cart",
    },
    {
      Display: "Contact",
      path: "/contact",
    },
  ];
  return (
    <Fragment>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={Logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>
            <div className="Navigations" ref={menuRef}>
              <div
                className="menu d-flex align-items-center gap-5"
                onClick={mobileMenu}
              >
                {menu__items.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(activeNavLink) =>
                      activeNavLink.isActive ? "active__menu" : ""
                    }
                  >
                    {item.Display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="right__nav d-flex align-items-center gap-4">
              <span className="cart__icon" onClick={cartToggle}>
                <i class="ri-shopping-basket-line"></i>
                <span className="shopping-badge">{cartTotalQuantity}</span>
              </span>
              <span className="user__icon">
                <Link to="/login">
                  <i class="ri-user-line"></i>
                </Link>
              </span>
              <span className="mobile-menu" onClick={mobileMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
