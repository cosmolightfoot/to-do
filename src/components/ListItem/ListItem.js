import React from 'react';
import firebase from '../../firebase/firebase';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const ToDoListItem = ({ title, completed, id }) => {
  const clickHandler = () => {
    firebase.firestore().collection('todos').doc(id).update({ completed: !completed });
  };

  return (
    <ListItem role={undefined} button onClick={clickHandler}>
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={completed}
        onClick={clickHandler}
        tabIndex={-1}
        disableRipple
      />
    </ListItemIcon>
    <ListItemText id={id} primary={title} />
  </ListItem>
  );
}

export default ToDoListItem;