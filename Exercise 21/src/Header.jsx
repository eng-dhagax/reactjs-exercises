import React from 'react';

function Header() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between mb-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="text-sm text-gray-500 mt-1">
          Here's what's happening with your courses today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative text-xl">
          🔔
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </div>
        <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
          R
        </div>
      </div>
    </div>
  );
}

export default Header;