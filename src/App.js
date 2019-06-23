import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todoList";

class App extends Component {
  state = {};

  render() {
    return (
      <main className="container">
        <h1>Welcome to your Todo list</h1>
        <TodoList />
      </main>
    );
  }
}

export default App;
