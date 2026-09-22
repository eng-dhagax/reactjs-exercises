import React from 'react';

const announcements = [
  {
    id: 1,
    title: 'New Course Available',
    message: 'Check out our new TypeScript course!',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Maintenance Notice',
    message: 'Platform updates scheduled for tonight',
    time: '5 hours ago',
  },
];

function Announcements() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Announcements</h2>

      <div className="flex flex-col gap-4">
        {announcements.map((item) => (
          <div key={item.id} className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600">{item.message}</p>
            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Announcements;