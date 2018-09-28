const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: unit,
    padding: unit * 3,
    maxWidth: 400,
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
});

export default styles;
