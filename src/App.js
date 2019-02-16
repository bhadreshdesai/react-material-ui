import React from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ExcerciseList from "./components/ExcerciseList";

const unit = 8;

const styles = {
  root: {
    margin: `${unit * 3}px auto`,
    padding: unit * 2,
    maxWidth: 400
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: [
        { id: 1, exerciseName: "Bench Press" },
        { id: 2, exerciseName: "Squats" },
        { id: 3, exerciseName: "Deadlift" }
      ],
      exerciseName: ""
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleDelete = id =>
    this.setState(prevState => ({
      exercises: prevState.exercises.filter(ex => ex.id !== id)
    }));

  handleCreate = e => {
    e.preventDefault();
    this.setState(prevState => ({
      exercises: [
        ...prevState.exercises,
        { id: Date.now(), exerciseName: prevState.exerciseName }
      ],
      exerciseName: ""
    }));
  };

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Typography variant="h4" align="center" gutterBottom={true}>
          Exercises
        </Typography>
        <form onSubmit={this.handleCreate}>
          <TextField
            name="exerciseName"
            label="Exercise Name"
            value={this.state.exerciseName}
            onChange={this.handleChange}
          />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
        <ExcerciseList
          exercises={this.state.exercises}
          handleDelete={this.handleDelete}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
