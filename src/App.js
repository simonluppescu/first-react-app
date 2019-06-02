import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todoList";

class App extends Component {
  state = {};

  render() {
    return (
      <main className="container">
        <TodoList />
      </main>
    );
  }
}

export default App;
