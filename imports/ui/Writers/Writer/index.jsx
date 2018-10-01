import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { NotFound } from "../../Errors";
import Text from "./Text";

export default ({ match: { url }, name, born, deceased, description, image, texts }) => (
  <Fragment>
    <img src={image} alt={name} style={{ maxWidth: 200 }} />
    <h1>{name}</h1>
    <h3>
      {born} &mdash; {deceased}
    </h3>
    <p>{description}</p>

    <ul>
      {texts.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${url}/texts/${id}`}> {title}</Link>
        </li>
      ))}
    </ul>

    <Route
      path={`${url}/texts/:textId`}
      render={props => {
        const foundText = texts.find(({ id }) => id === props.match.params.textId);

        if (!foundText) {
          return <NotFound />;
        }

        return <Text {...foundText} />;
      }}
    />
  </Fragment>
);
