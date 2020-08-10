import React from "react";

class displayTodo extends React.Component {
  render() {
    return (
      <div>
        <h2>Your Todo Items</h2>
        {this.props.taskArray.map((task) => {
          return (
            <div key={task.taskid}>
              {" "}
              {/* handles unique key value for map fx */}
              <h3>
                {task.taskid}
                {task.task}
              </h3>
              <button onClick={() => this.props.setUpEditTodo(task.taskid)}>
                Edit
              </button>
              <button onClick={() => this.props.deleteTodo(task.taskid)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default displayTodo;
