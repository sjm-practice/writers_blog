/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    state = {};

    async componentDidMount() {
      const writers = await (await fetch("http://localhost:3004/writers")).json();

      this.setState({ writers });

      // or, in a promise format...
      // fetch("http://localhost:3004/writers")
      //   .then(res => res.json())
      //   .then(writers => this.setState({ writers }))
      //   .catch(error => console.error("Error:", error)); // eslint-disable-line no-console
    }

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Typography variant="display1" align="center" gutterBottom>
            Hello!
          </Typography>
        </Paper>
      );
    }
  },
);
