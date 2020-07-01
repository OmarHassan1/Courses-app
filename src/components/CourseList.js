import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  renderCourses = () => {
    return (
      <li>
        <span>{this.props.detils.name}</span>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Courses
        </button>
        <button>Edit Courses</button>
      </li>
    );
  };
  renderUpdateForm = () => {
    return (
      <form>
        <input type="text" />
        <button>Update Courses</button>
      </form>
    );
  };
  render() {
    return <Fragment>{this.renderCourses()}</Fragment>;
  }
}

export default CourseList;
