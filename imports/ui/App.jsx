/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styles from "./styles";
import Writers from "./Writers";
import { NotFound } from "./Errors";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    state = {
      writers: [],
    };

    async componentDidMount() {
      const writers = await (await fetch(
        "http://localhost:3004/writers?_embed=texts",
      )).json();

      this.setState({ writers });

      // or, in a promise format...
      // fetch("http://localhost:3004/writers")
      //   .then(res => res.json())
      //   .then(writers => this.setState({ writers }))
      //   .catch(error => console.error("Error:", error)); // eslint-disable-line no-console
    }

    render() {
      const { classes } = this.props;
      const { writers } = this.state;

      return (
        <BrowserRouter>
          <Fragment>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/writers">Writers</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/" render={() => <div>Home</div>} />

              <Route
                path="/writers"
                render={props => <Writers {...props} writers={writers} />}
              />

              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      );
    }
  },
);
