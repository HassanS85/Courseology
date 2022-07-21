package com.nology.Courseology;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


public class Course {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String courseName;
    private String location;
    private double price;
    private String duration;
    private String summary;


    public Course(String courseName, String location, double price, String duration, String summary) {
        this.courseName = courseName;
        this.location = location;
        this.price = price;
        this.duration = duration;
        this.summary = summary;
    }

    public Course() {

    }

    public int getId() {
        return id;
    }

    public String getCourseName() {
        return courseName;
    }

    public String getLocation() {
        return location;
    }

    public double getPrice() {
        return price;
    }

    public String getDuration() {
        return duration;
    }

    public String getSummary() {
        return summary;
    }
}
