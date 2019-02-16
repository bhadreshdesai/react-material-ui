import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

class ExcerciseList extends React.Component {
  render() {
    const exercises = this.props.exercises;
    const handleDelete = this.props.handleDelete;
    return (
      <List>
        {exercises.map(exercise => (
          <ListItem key={exercise.id}>
            <ListItemText primary={exercise.exerciseName} />
            <ListItemSecondaryAction>
              <IconButton
                color="primary"
                onClick={() => handleDelete(exercise.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ExcerciseList;
