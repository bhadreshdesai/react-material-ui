import React from "react";
import { Button, TextField } from "@material-ui/core";

class ExcerciseForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleCreate}>
        <TextField
          name="exerciseName"
          label="Exercise Name"
          value={this.props.exerciseName}
          onChange={this.props.handleChange}
        />
        <Button type="submit" color="primary" variant="contained">
          Create
        </Button>
      </form>
    );
  }
}

export default ExcerciseForm;
