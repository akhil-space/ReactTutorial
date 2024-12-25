import { useReducer  }  from "react";
import reducer from './useReducer'
import React from "react";


export default function TodoList() {
  // Use the useReducer hook to get the current state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the event handlers for each action
  const handleAddTodo = (title) => {
    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title, complete: false } });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleSetFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  // Render the UI based on the state
  return (
    <div>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoFilter value={state.filter} onChange={handleSetFilter} />
      <TodoList todos={state.todos} filter={state.filter} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
}