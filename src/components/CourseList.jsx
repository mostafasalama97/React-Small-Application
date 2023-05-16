import React, { useState } from "react";

const CourseList = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.details.name);

  // toggle state
  const toggleState = () => {
    setIsEdit(!isEdit);
  };

  function updateCourseItem(e) {
    e.preventDefault();
    props.editCourse(props.index, inputValue);
    toggleState();
  }

  // render update form
  const renderUpdateForm = () => {
    return (
      <form onSubmit={updateCourseItem}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Update Course</button>
      </form>
    );
  };

  return (
    <li>
      {props.details.name ? (
        <>
          <span>{props.details.name}</span>
          <button onClick={() => props.deleteCourse(props.index)}>
            Delete course
          </button>
          <button onClick={toggleState}>Edit Course</button>
          {isEdit && renderUpdateForm()}
        </>
      ) : (
        <span>No courses to display</span>
      )}
    </li>
  );
};

export default CourseList;
