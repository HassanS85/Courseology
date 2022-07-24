import {useState, useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

function App () {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const json = await response.json();
    console.log(json);
    setCourses(json);
  };

  useEffect(() => {
    getCourses();
  }, [])

}
