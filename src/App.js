import React, { useState } from "react";
import { render } from "react-dom";
import CourseForm from "./components/Form";
import CourseList from "./components/CourseList";

function App() {
  const [courses, setCourses] = useState([
    { name: "HTML" },
    { name: "CSS" },
    { name: "C++" },
  ]);
  const [current, setCurrent] = useState("");

  // function to update course
  function updateCourse(e) {
    setCurrent(e.target.value);
  }

  // function to add course
  function addCourse(e) {
    e.preventDefault();
    let updatedCourses = [...courses, { name: current }];
    setCourses(updatedCourses);
    setCurrent("");
  }

  // delete course
// function deleteCourse(index){
//   let courses = this.state.courses
//   courses.splice(index , 1)
//   this.setState({
//     courses
//   })
// }

 // delete course
 function deleteCourse(index) {
  let updatedCourses = [...courses];
  updatedCourses.splice(index, 1);
  setCourses(updatedCourses);
}

// edit function

function editCourse(index , val) {
  let allcourses = [...courses]
  let course = allcourses[index]
  course['name'] = val;
  setCourses(allcourses)
}


  const courseList = courses.map((course, index) => {
    return <CourseList key={index} index={index} details={course} deleteCourse={deleteCourse} editCourse={editCourse} />;
  });
 
  return (
    <section className="App">
      <h2>Add Courses</h2>
      <CourseForm
        updateCourse={updateCourse}
        addCourse={addCourse}
        current={current}
      />
      <ul>{courseList}</ul>
    </section>
  );
}

render(<App />, document.getElementById("root"));

export default App;
