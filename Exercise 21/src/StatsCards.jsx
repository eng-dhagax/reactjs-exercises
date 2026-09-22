import React from 'react';

const stats = [
  { icon: '📊', label: 'Average Grade', value: '88%' },
  { icon: '📚', label: 'Courses', value: '3' },
  { icon: '⏰', label: 'Study Hours', value: '45h' },
  { icon: '✍️', label: 'Assignments', value: '12' },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-xl">{stat.icon}</span>
            <span>{stat.label}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;