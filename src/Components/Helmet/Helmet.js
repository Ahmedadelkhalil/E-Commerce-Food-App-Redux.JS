import React, { Fragment } from "react";

const Helmet = (props) => {
  document.title = "Food Ordering App - " + props.title;
  return (
    <Fragment>
      <div className="w-100">{props.children}</div>
    </Fragment>
  );
};

export default Helmet;
