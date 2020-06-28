import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import "../style/App.css";
class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "JS" }, { name: "React" }],
  };
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList detils={course} key={index} />;
    });

    return (
      <div className="App">
        <h1>Add Courese</h1>
        <CourseForm />
        <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;
