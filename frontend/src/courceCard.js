
import React from "react";
import "./CourseCard.css";

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <div className="course-image">
                <img src={course.image} alt={course.title} />

                <span className="course-category">
                    {course.category}
                </span>
            </div>

            <div className="course-content">
                <div className="course-rating">
                    ⭐ {course.rating}
                    <span>({course.students} students)</span>
                </div>

                <h3>{course.title}</h3>

                <p className="lecturer">
                    By {course.lecturer}
                </p>

                <div className="course-info">
                    <span>🎥 {course.lessons} Lessons</span>
                    <span>⏱ {course.duration}</span>
                </div>

                <div className="course-footer">
                    <h3>Rs. {course.price}</h3>
                    <button>View Course</button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
