import React from 'react';

class ToDoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" /> {this.props.todo.title}
      </li>
    )
  }
}
export default ToDoItem