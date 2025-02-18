import React from 'react';
    import { Link } from 'react-router-dom';

    function LoginPage() {
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
              <h2>Login</h2>
              <form>
                <label>
                  Username:
                  <input type="text" name="username" />
                </label>
                <br />
                <label>
                  Password:
                  <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      );
    }

    export default LoginPage;
