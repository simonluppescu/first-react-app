import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1&completed=false")
      .then(response => response.json())
      .then(json => {
        this.setState({ todos: json });
      });
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map(t => (
          <TodoItem todo={t} key={t.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;
