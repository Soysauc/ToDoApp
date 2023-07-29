import React, { createContext, useState, useEffect } from 'react';
import { fetchTodos } from './Api/fetchTodos';

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      fetchTodos().then((data) => {
        setTodos(data);
        localStorage.setItem('todos', JSON.stringify(data));
      });
    }
  }, []);

  const addTodo = (newTodoItem) => {
    setTodos((prevTodos) => {
      const updatedTodos = [newTodoItem, ...prevTodos];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};
