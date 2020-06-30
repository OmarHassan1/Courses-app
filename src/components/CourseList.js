import React, { Component, Fragment } from "react";

class CourseList extends Component {
  renderCourses = () => {
    return (
      <li>
        <span>{this.props.detils.name}</span>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Courses
        </button>
      </li>
    );
  };

  render() {
    return <Fragment>{this.renderCourses()}</Fragment>;
  }
}

export default CourseList;
