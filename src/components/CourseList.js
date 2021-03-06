import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  renderCourses = () => {
    return (
      <li>
        <span>{this.props.detils.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Courses
        </button>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Courses
        </button>
      </li>
    );
  };

  //toggleState
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.detils.name}
        />
        <button>Update Courses</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourses()}
      </Fragment>
    );
  }
}

export default CourseList;
