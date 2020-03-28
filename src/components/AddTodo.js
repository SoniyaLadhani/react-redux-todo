import React, { Component } from "react";
import { connect } from "react-redux";
import {submitNewTodo} from '../actions';

export class AddTodo extends Component {

    state = {
        todo: ""
    }
    submitTodo = (e) => {
      e.preventDefault();
      
      const newTodo = {
          title: this.state.todo,
          completed: false,
          id: Math.random()
      };

      this.props.dispatch(submitNewTodo(newTodo));
  };

  handleChange = (e) => {
    this.setState({
        todo: e.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            name="todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="Submit"> Add Todo </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store
};

export default connect(mapStateToProps)(AddTodo);
