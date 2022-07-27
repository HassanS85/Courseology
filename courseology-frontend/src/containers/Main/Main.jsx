import React from "react";
import "./Main.scss";
import Course from "../../components/Courses/Courses";

const Main = ({courses}) => {
  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default Main;