import React from 'react';
import Header from './Header';
import StatsCards from './Statscards';
import CourseProgress from './CourseProgress';
import AssignmentTracker from './AssignmentTracker';
import Announcements from './Announcements';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <StatsCards />

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <CourseProgress />
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <AssignmentTracker />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;