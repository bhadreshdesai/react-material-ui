import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography
} from "@material-ui/core";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { exercises: [], exerciseName: "" };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

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
      <div>
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
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
        <List>
          {this.state.exercises.map(exercise => (
            <ListItem key={exercise.id}>
              <ListItemText primary={exercise.exerciseName} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
