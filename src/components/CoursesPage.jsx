import React from 'react';
    import { Link } from 'react-router-dom';

    function CoursesPage() {
      return (
        <div className="app-container">
          <div className="sidebar">
            <div className="logo">F.</div>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="content">
            <div className="container">
              <h2>Our Courses</h2>
              <div className="course">
                <img src="https://via.placeholder.com/350x150" alt="Course 1" />
                <h3>Course Title 1</h3>
                <p>Description of course 1.</p>
              </div>
              <div className="course">
                <img src="https://via.placeholder.com/350x150" alt="Course 2" />
                <h3>Course Title 2</h3>
                <p>Description of course 2.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default CoursesPage;
