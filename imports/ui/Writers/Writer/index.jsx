import React, { Fragment } from "react";

export default ({ id, name, description, image }) => (
  <Fragment>
    <div>
      {id}
      {name}
      {description}
      {image}
    </div>
  </Fragment>
);
