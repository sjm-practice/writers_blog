import React, { Fragment } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Writer from "./Writer";

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
      render={({ match }) => {
        const foundWriter = writers.find(writer => writer.id === match.params.writerId);

        if (!foundWriter) {
          return <h3>Not Found.</h3>;
        }

        return <Writer {...foundWriter} />;
      }}
    />
  </Fragment>
);
