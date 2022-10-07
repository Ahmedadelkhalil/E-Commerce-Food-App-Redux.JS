import React from "react";
import Slider from "react-slick";

import avatar01 from "../../../Assets/images/ava-1.jpg";
import avatar02 from "../../../Assets/images/ava-2.jpg";
import avatar03 from "../../../Assets/images/ava-3.jpg";

import "../../../Styles/TestimonialSlide.css";

const TestimonialSlide = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplayspeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Slider {...setting}>
      <div>
        <div>
          <p className="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            doloremque vero aut repudiandae placeat, excepturi assumenda, sequi
            labore ab dolore quod magnam ut ipsa voluptas similique autem saepe
            consequatur. Facere!
          </p>
          <div className="revire-content d-flex align-items-center gap-3">
            <img src={avatar01} alt="review__img" className="rounded" />
            <h3>Ahmed Adel</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="review-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            doloremque vero aut repudiandae placeat, excepturi assumenda, sequi
            labore ab dolore quod magnam ut ipsa voluptas similique autem saepe
            consequatur. Facere!
          </p>
          <div className="revire-content d-flex align-items-center gap-3">
            <img src={avatar02} alt="review__img" className="rounded" />
            <h3>Farida Ahmed</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="review-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            doloremque vero aut repudiandae placeat, excepturi assumenda, sequi
            labore ab dolore quod magnam ut ipsa voluptas similique autem saepe
            consequatur. Facere!
          </p>
          <div className="revire-content d-flex align-items-center gap-3">
            <img src={avatar03} alt="review__img" className="rounded" />
            <h3>Omar Khalil</h3>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlide;
