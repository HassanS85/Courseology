import {useState, useEffect} from "react";
import "./CourseDetails.scss";
import { useParams } from "react-router-dom";

const CourseInformation = () => {
  const [course, setCourse] = useState({});

  const {courseId} = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`http://localhost:8080/course/${courseId}`);
      const json = await response.json();
      console.log(json);
      setCourse(json);
    };
    fetchCourses();
  }, [courseId, setCourse]);

  return (
    <div className="course-details">
      {course && (
        <div className="course-details__header">
          <h1>{course.courseName}</h1>
          <p>{course.summary}</p>
        </div>
      )}

      
    </div>
  );
};

export default CourseInformation;