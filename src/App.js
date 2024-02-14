

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
