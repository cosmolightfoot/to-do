import { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("todos")
      .onSnapshot((snapshot) => {
        const newTodos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(newTodos);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return todos;
};
