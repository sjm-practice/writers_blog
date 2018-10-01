import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import Writer from "./Writer";
import { NotFound } from "../Errors";

export default ({ match: { url }, writers }) => (
  <Fragment>
    <ul>
      {writers.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>

    <Route exact path={url} render={() => <h3>Please select a writer from above.</h3>} />

    <Route
      path={`${url}/:writerId`}
      render={props => {
        const foundWriter = writers.find(
          writer => writer.id === props.match.params.writerId,
        );

        if (!foundWriter) {
          return <NotFound />;
        }

        return <Writer {...props} {...foundWriter} />;
      }}
    />
  </Fragment>
);
