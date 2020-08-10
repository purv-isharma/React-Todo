import React from "react";
import "./styles.css";
import Todo from "./Todo";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The Todo Page</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
