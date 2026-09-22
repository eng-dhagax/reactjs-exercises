import React from 'react';

const assignments = [
  {
    id: 1,
    title: 'Build a Todo App',
    course: 'React Fundamentals',
    due: 'Due 2026-09-4',
    status: 'pending',
  },
  {
    id: 2,
    title: 'API Integration',
    course: 'JavaScript Advanced',
    due: 'Due 2026-09-10',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Design System',
    course: 'UI/UX Design',
    due: 'Due 2026-09-25',
    status: 'in-progress',
  },
];

const statusStyles = {
  pending: 'bg-red-100 text-red-600',
  completed: 'bg-green-100 text-green-600',
  'in-progress': 'bg-yellow-100 text-yellow-700',
};

function AssignmentTracker() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Upcoming Assignments</h2>

      <div className="flex flex-col gap-4">
        {assignments.map((item) => (
          <div key={item.id} className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.course}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
              <span className="text-xs text-gray-400">{item.due}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AssignmentTracker;