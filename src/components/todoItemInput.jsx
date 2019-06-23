import React, { Component } from "react";

class TodoItemInput extends Component {
  render() {
    return (
      <input
        type="text"
        style={{ display: this.props.displayProp }}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TodoItemInput;
