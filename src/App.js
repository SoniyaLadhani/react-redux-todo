import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
