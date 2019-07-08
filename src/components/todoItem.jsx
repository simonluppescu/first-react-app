import React, { Component } from "react";
import "../todoList.css";
import TodoItemTitle from "./todoItemTitle";
import TodoItemInput from "./todoItemInput";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      value: this.props.todo.title,
      id: this.props.todo.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  editingDisplayProp(isEdit) {
    return isEdit ? "inline" : "none";
  }

  toggleEdit = () => {
    this.setState(state => {
      return { isEdit: !state.isEdit };
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSave() {
    this.updateServer();

    this.toggleEdit();
  }

  updateServer() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.warn("Cannot save this todo. Oh well.");
        }
      })
      .then(json => {
        if (json) console.log("Saved", json);
      });
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
