
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './home/home';
import About from './home/about';
import Contact from './home/contact';
import Courses from './home/courses';
import Navbar from './navbar/navbar';
import Login from './login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './security/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Route - Login */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirectTo="/login"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                  </Routes>
                </>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
