import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, markTodoAsComplete } from "../actions";

export class TodoList extends Component {
  handleComplete = itemId => {
    this.props.dispatch(markTodoAsComplete(itemId));
  };

  handleDelete = itemId => {
    this.props.dispatch(deleteTodo(itemId));
  };

  render() {
    return this.props.todos.map(todoItem => (
      <div key={todoItem.id}>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => this.handleComplete(todoItem.id)}
        />
        <span>{todoItem.title}</span>
        <span onClick={() => this.handleDelete(todoItem.id)}>X</span>
      </div>
    ));
  }
}

const mapStateToProps = store => {
  return { todos: store.todoReducer.todos };
};

export default connect(mapStateToProps)(TodoList);
