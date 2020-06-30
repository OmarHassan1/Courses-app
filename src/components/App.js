import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import "../style/App.css";
class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "JS" }, { name: "React" }],
    current: "",
  };
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({ courses, current: "" });
  };

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList detils={course} key={index} />;
    });

    return (
      <div className="App">
        <h1>Add Courese</h1>
        <CourseForm
          current={this.state.current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
        />
        <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;
