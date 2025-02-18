import React from 'react';
    import { Link } from 'react-router-dom';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

    const data = [
      { name: 'Mon', hours: 1.5 },
      { name: 'Tue', hours: 2.5 },
      { name: 'Wed', hours: 1 },
      { name: 'Thu', hours: 4 },
      { name: 'Fri', hours: 3 },
      { name: 'Sat', hours: 3 },
      { name: 'Sun', hours: 2 },
    ];

    function HomePage() {
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
            <div className="dashboard">
              <div className="courses-section">
                <h2>Hello Josh!</h2>
                <p>It's good to see you again.</p>
                <div className="course-card">
                  <h3>Spanish B2</h3>
                  <p>by Alejandro Velazquez</p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <h2>Courses</h2>
                <div className="course-card">
                  <h3>Learn Figma</h3>
                  <p>by Christopher Morgan</p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="course-card">
                  <h3>Analog Photography</h3>
                  <p>by Gordon Norman</p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              <div className="statistics-section">
                <h2>Your Statistics</h2>
                <LineChart width={400} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="hours" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                <div className="premium-section">
                  <h3>Learn even more!</h3>
                  <p>Unlock premium features for only $9.99 per month.</p>
                  <button>Go Premium</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default HomePage;
