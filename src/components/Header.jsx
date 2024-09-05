import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <button className="text-blue-800 font-semibold">Logout</button>
      </div>
    </header>
  );
}

export default Header;
