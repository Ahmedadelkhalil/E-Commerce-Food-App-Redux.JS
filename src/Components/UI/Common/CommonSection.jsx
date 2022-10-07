import React from "react";
import "../../../Styles/CommonSection.css";
import { Container } from "reactstrap";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="common_section_title text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
