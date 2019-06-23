import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: {}
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    // This endpoint will always return the same todo with id 201
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: "Set title"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        const newTodos = { ...this.state.todos };
        newTodos[json.id] = { id: json.id, title: json.title };

        this.setState({ todos: newTodos });
      });
  }

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
        <button className="btn btn-success" onClick={this.handleAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoList;
