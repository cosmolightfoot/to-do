import React from "react";
import List from "@material-ui/core/List";
import { useTodos } from "../../utils/hooks/useTodos";
import ToDoListItem from "../ListItem/ListItem";
import Paper from '@material-ui/core/Paper';

const ToDoList = () => {
  const todos = useTodos();
  return (
  <Paper elevation={4}>
    <List>
      {todos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </List>
  </Paper>
  );
};

export default ToDoList;
