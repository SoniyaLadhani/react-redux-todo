import { combineReducers } from "redux";
import { ADD_TODO, DEL_TODO, COMPLETE_TODO } from "../actions/types";

const initialState = {
  todos: [
    { title: "Get milk", completed: false, id: Math.random() },
    { title: "Do laundry", completed: false, id: Math.random() },
    { title: "Clean floor", completed: true, id: Math.random() }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
          return {
              todos: [...state.todos, action.payload]
          }
      case DEL_TODO:
          return {
            todos: state.todos.filter(todoItem => todoItem.id !== action.payload)
          }
    case COMPLETE_TODO:
        const newState = state.todos.map(todoItem => {
            if(todoItem.id === action.payload) {
                todoItem.completed = !todoItem.completed;
            }
            return todoItem;
        });
        return {
            todos: newState
        }
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  todoReducer
});

export default rootReducers;
