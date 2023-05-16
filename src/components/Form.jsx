import React from "react";

const CourseForm = (props) => {
  const { current, updateCourse, addCourse } = props;

  return (
    <form onSubmit={addCourse}>
      <input
        type="text"
        value={current}
        onChange={updateCourse}
      />
      <button type="submit" disabled={!current}>Add Course</button>
    </form>
  );
};

export default CourseForm;
