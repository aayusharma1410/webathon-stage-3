import React from 'react';
    import { Route, Routes } from 'react-router-dom';
    import HomePage from './components/HomePage';
    import CoursesPage from './components/CoursesPage';
    import LoginPage from './components/LoginPage';
    import AboutPage from './components/AboutPage';

    function App() {
      return (
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      );
    }

    export default App;
