import {useState, useEffect} from "react";
import "./App.scss";

function App() {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const json = await response.json();
    console.log(json);
    setCourses(json);
  };

  useEffect(() => {
    getCourses();
  }, []);

  
  return (
    <div className="app__content">{courses}</div>
    
  );
}


export default App;

