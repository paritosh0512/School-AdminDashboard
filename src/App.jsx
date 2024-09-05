import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import StudentForm from './components/StudentsForm';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className=" flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto">
          <Outlet/>
          {/* <Dashboard />
          <StudentForm/> */}
        </main>
      </div>
    </div>
  );
}

export default App;
