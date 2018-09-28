/* eslint-disable react/display-name */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default ({ match: { url }, writers }) => (
  <Fragment>
    <ul>
      {writers.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
);
