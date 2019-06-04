import React, { Component } from "react";
import "../todoList.css";
import TodoItemTitle from "./todoItemTitle";
import TodoItemInput from "./todoItemInput";

class TodoItem extends Component {
  state = {
    isEdit: false
  };

  titleDisplayProp() {
    return this.state.isEdit ? "none" : "inline";
  }
  inputDisplayProp() {
    return this.state.isEdit ? "inline" : "none";
  }

  toggleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <TodoItemTitle
          onClick={this.toggleEdit}
          value={this.props.todo.title}
          displayProp={this.titleDisplayProp()}
        />
        <TodoItemInput
          value={this.props.todo.title}
          displayProp={this.inputDisplayProp()}
        />
      </div>
    );
  }
}

export default TodoItem;
