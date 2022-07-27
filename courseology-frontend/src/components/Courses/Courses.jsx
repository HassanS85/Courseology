import React from "react";
import "./Course.scss";
import {Link} from "react-router-dom";

const Courses = ({courses}) => {
  const {id, course_name, location, price, duration, summary} = courses;

  return (
    <div className="course-card">
      <h2 className="course-card__header">{title}</h2>
      <p>Course Name:{course_name}</p>
      <p>Course Duration: {duration}</p>
      <p>Price {price}</p>
      <p>Location: {location}</p>
      <p>Summary: {summary}</p>
      <Link to={`/course/${id}`}>Learn More</Link>
    </div>
  );
};

export default Courses;