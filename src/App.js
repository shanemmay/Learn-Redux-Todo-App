import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
            <AddTodo/>
            {/*<TodoList/>*/}
      </div>
    );
  }
}

export default App;
