import React, { useRef } from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import CommonSection from "../Components/UI/Common/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import "../Styles/Contact_Us.css";

const Contact = () => {
  const clientSenderNameRef = useRef();
  const clientSenderEmailRef = useRef();
  const clientSenderMsgRef = useRef();
  const clientVerification = useRef();

  const senderInfo = [];

  const contactsubmitHandler = (e) => {
    e.preventDefault();

    const senderName = clientSenderNameRef.current.value;
    const senderEmail = clientSenderEmailRef.current.value;
    const senderMsg = clientSenderMsgRef.current.value;
    const verificationStatus = clientVerification.current.value;

    const senderData = {
      senderName,
      senderEmail,
      senderMsg,
      verificationStatus,
    };
    senderInfo.push(senderData);
    console.log(senderInfo);
  };
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h5 className="contact_title">Have Some Questions ?</h5>
              <p className="contact_text">
                thank you for interesting in our service . please fill out the
                form below or email us at <span>ahmedkhalil4774@gmail.com</span>{" "}
                and we will get back to you promptly regarding your request .
              </p>
            </Col>

            <Col lg="4" md="4" sm="12" className="left_side contact_form_left">
              <div className="text_top_contact_us">
                <div className="contact_form_header mb-5">
                  <h4>contact us</h4>
                </div>
                <form onSubmit={contactsubmitHandler}>
                  <div>
                    <p>Name</p>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="mb-3"
                      required
                      ref={clientSenderNameRef}
                    />
                  </div>
                  <div className="mb-3">
                    <p>Email</p>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      className="mb-4"
                      ref={clientSenderEmailRef}
                    />
                  </div>
                  <div>
                    <p className="mb-3">Verification</p>
                    <div className="d-flex align-items-center gap-3">
                      <input
                        type="checkbox"
                        placeholder="Verification"
                        required
                        className="checkB"
                        ref={clientVerification}
                      />
                      <span className="not_robot_text">i am not a robot</span>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col
              lg="8"
              md="8"
              sm="12"
              className="right_side contact_form_right"
            >
              <form>
                <p className="msg_word">Message</p>
                <textarea
                  placeholder="Write Your Message Here ..."
                  className="w-100"
                  ref={clientSenderMsgRef}
                  required
                />

                <button type="submit" onClick={contactsubmitHandler}>
                  Send Message
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
