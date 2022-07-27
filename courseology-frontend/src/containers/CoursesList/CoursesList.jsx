import "./CoursesList.scss";
import Courses from "../../components/Courses/Courses"

const CoursesList = ({courses}) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Courses key={index} courses={course} />
      ))}
    </div>
  );
};

export default CoursesList;