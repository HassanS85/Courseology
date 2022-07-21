package com.nology.Courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseController {

    @Autowired
    CourseRepository repository;

    private List<Course> courses = new ArrayList<Course>();

    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course){
        repository.save(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Success, this course has been added");
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getGreetingById(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findById(Integer.parseInt(id)));
    }

    @DeleteMapping("/course/{id}")
    //transactional?
    public ResponseEntity<String> deleteCourse(@PathVariable String id) {
        repository.deleteById(Integer.parseInt(id));
        return ResponseEntity.status(HttpStatus.OK).body("Course Deleted");
    }
}