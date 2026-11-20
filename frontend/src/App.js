
import React from "react";
import CourseCard from "./courceCard";

const courses = [
  {
    title: "Complete Web Development",
    category: "Web Development",
    lecturer: "John Smith",
    rating: 4.8,
    students: 120,
    lessons: 45,
    duration: "12 Hours",
    price: 2500,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Python Programming",
    category: "Programming",
    lecturer: "Alex Martin",
    rating: 4.9,
    students: 95,
    lessons: 30,
    duration: "8 Hours",
    price: 1800,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    title: "UI/UX Design Masterclass",
    category: "Design",
    lecturer: "Sarah Wilson",
    rating: 4.7,
    students: 80,
    lessons: 25,
    duration: "6 Hours",
    price: 2000,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  }
];

function App() {
  return (
    <div style={{ padding: "40px", background: "#f8fafc", minHeight: "100vh" }}>
      <h1>Explore Courses</h1>
      <p>Learn new skills from expert lecturers.</p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        marginTop: "30px"
      }}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
