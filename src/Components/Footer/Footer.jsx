import React from "react";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import Logo from "../../Assets/images/res-logo.png";
import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={Logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                nam ratione eum .
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="delivery">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="Delivery__time-item">
              <ListGroupItem className="Delivery__time-item border-0 ps-0">
                <span>Sunday - Thuesday</span>
                <p>10:00 Am - 11:00 Pm</p>
              </ListGroupItem>
              <ListGroupItem className="Delivery__time-item border-0 ps-0">
                <span>Saturday - Friday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6" className="contact">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="Delivery__time-item">
              <ListGroupItem className="Delivery__time-item border-0 ps-0">
                <span>Location : Elmahallah-El-Kubrah , Egypt</span>
              </ListGroupItem>
              <ListGroupItem className="Delivery__time-item border-0 ps-0">
                <span>Phone : 01025521486</span>
              </ListGroupItem>
              <ListGroupItem className="Delivery__time-item border-0 ps-0">
                <span>Email: Ahmedkhalil4774@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 theEnd">
          <Col lg="6" md="6">
            <div className="copyright d-flex align-items-center gap-1">
              <p className=" m-0">
                <span>
                  <i class="ri-copyright-line"></i>
                </span>
                {" - "}
                2022 - This Website Made By Ahmed Adel . All Rights Are Reserved
                .
              </p>
            </div>
          </Col>
          <Col lg="6" md="6" className="social">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="mb-0">Follow :</p>
              <a
                href="https://www.facebook.com/profile.php?id=100049387380100"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i class="ri-facebook-circle-line"></i>
                </span>
              </a>
              <a
                href="https://github.com/Ahmedadelkhalil"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i class="ri-github-line"></i>
                </span>
              </a>
              <a
                href="https://wa.me/01025521486"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i class="ri-whatsapp-line"></i>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-khalil-4541bb219/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i class="ri-linkedin-line"></i>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
