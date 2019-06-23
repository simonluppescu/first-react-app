import React, { Component } from "react";
import "../todoList.css";
import TodoItemTitle from "./todoItemTitle";
import TodoItemInput from "./todoItemInput";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      value: this.props.todo.title
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  editingDisplayProp(isEdit) {
    return isEdit ? "inline" : "none";
  }

  toggleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSave() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <TodoItemTitle
          onClick={this.toggleEdit}
          value={this.state.value}
          displayProp={this.editingDisplayProp(!this.state.isEdit)}
        />
        <div
          className="edit-tools"
          style={{ display: this.editingDisplayProp(this.state.isEdit) }}>
          <TodoItemInput
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="btn btn-sm btn-success" onClick={this.handleSave}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
