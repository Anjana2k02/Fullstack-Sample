import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import CreateUser from './createUser';
import ViewUser from './viewUser';
import ManageUser from './manageUser';

const App = () => {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path="/add" element={<CreateUser />} />
        <Route path="/view" element={<ViewUser />} />
        <Route path="/edit" element={<ManageUser />} />
      </Routes>
    </Router>
  );
}

export default App;
