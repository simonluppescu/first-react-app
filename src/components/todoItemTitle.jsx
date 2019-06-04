import React, { Component } from "react";

class TodoItemTitle extends Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className="todo-title"
        style={{ display: this.props.displayProp }}>
        {this.props.value}
      </span>
    );
  }
}

export default TodoItemTitle;
