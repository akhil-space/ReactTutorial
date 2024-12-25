

// Define the initial state
const initialState = {
    todos: [],
    filter: "all",
  };
  
// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          }),
        };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };

  export default reducer;