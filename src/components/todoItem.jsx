import React, { Component } from "react";
import "../todoList.css";

class TodoItem extends Component {
  editTitle() {
    console.log(this);
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <span onClick={this.editTitle} className="todo-title">
          {this.props.todo.title}
        </span>
        <input
          type="text"
          className="todo-title-input"
          value={this.props.todo.title}
        />
      </div>
    );
  }
}

export default TodoItem;
