import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { exerciseName: "" };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    return (
      <div>
        <Typography variant="h4" align="center" gutterBottom={true}>
          Exercises
        </Typography>
        <form>
          <TextField
            name="exerciseName"
            label="Exercise Name"
            value={this.state.exerciseName}
            onChange={this.handleChange}
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
      </div>
    );
  }
}
