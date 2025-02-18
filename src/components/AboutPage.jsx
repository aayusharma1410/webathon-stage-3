import React from 'react';
    import { Link } from 'react-router-dom';

    function AboutPage() {
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
              <h2>About Vidhya Bandhu</h2>
              <p>Vidhya Bandhu is an E-Learning platform designed to provide interactive and visually appealing
                learning experiences for students.</p>
            </div>
          </div>
        </div>
      );
    }

    export default AboutPage;
