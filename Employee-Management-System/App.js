import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './frontend/admin-dash';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';



function App() {
  return (
    <div className="App">
     <AdminDashboard />
     <NavBar />
            <SideBar />
  
    </div>
  );
}

export default App;
