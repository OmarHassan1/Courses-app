import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import "../style/App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Courese</h1>
        <CourseForm />
        <CourseList />
      </div>
    );
  }
}

export default App;
