import React from "react";
import DisplayTodo from "./displayTodo";

class Todo extends React.Component {
  state = {
    task: "",
    taskid: 1,
    taskArray: [],
    isEditing: false,
    editId: ""
  };

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      taskid: this.state.taskid + 1,
      taskArray: [
        ...this.state.taskArray,
        { task: this.state.task, taskid: this.state.taskid }
      ], // appending the array
      task: "" //controlling the value
    });
  };

  handleTodo = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  deleteTodo = (taskid) => {
    console.log(taskid);
    const newTodos = this.state.taskArray.filter(
      (task) => task.taskid !== taskid
    );
    this.setState({
      taskArray: newTodos
    });
  };

  setUpEditTodo = (id) => {
    const todo = this.state.taskArray.find((task) => task.taskid === id);
    this.setState({
      isEditing: true,
      editId: id,
      task: todo.task
    });
  };

  editTodo = (event) => {
    event.preventDefault(); // because we put it in form tag
    const tempArray = this.state.taskArray;
    const index = this.state.taskArray.findIndex(
      (task) => task.taskid === this.state.editId
    );

    tempArray[index] = { ...tempArray[index], task: this.state.task };

    this.setState({
      taskArray: tempArray,
      isEditing: false,
      editId: "",
      task: ""
    });
  };

  render() {
    console.log(this.state.taskArray);
    return (
      <div>
        <form onSubmit={!this.state.isEditing ? this.addTodo : this.editTodo}>
          <input
            type="text"
            name="task"
            placeholder="Add an item ....."
            value={this.state.task} //controlling the value
            onChange={this.handleTodo}
          />
          <button type="submit">
            {!this.state.isEditing ? "Add the item" : "Editing ..."}
          </button>
        </form>
        <DisplayTodo
          taskArray={this.state.taskArray}
          deleteTodo={this.deleteTodo}
          setUpEditTodo={this.setUpEditTodo}
        />
      </div>
    );
  }
}

export default Todo;
