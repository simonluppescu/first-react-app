import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  state = {
    todos: {}
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1&completed=false")
      .then(response => response.json())
      .then(json => {
        const todos = {};
        for (let i = 0; i < json.length; i++) {
          const todo = json[i];
          todos[todo.id] = todo;
        }
        this.setState({ todos: todos });
      });
  }

  render() {
    return (
      <div className="todo-list">
        {Object.keys(this.state.todos).map(key => (
          <TodoItem key={key} todo={this.state.todos[key]} />
        ))}
      </div>
    );
  }
}

export default TodoList;
