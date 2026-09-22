import React from 'react';

const courses = [
  {
    id: 1,
    name: 'React Fundamentals',
    instructor: 'Eng Mc Hamuuda',
    nextLesson: 'Components & Props',
    progress: 75,
  },
  {
    id: 2,
    name: 'JavaScript Advanced',
    instructor: 'Mc Hamuuda',
    nextLesson: 'Async/Await',
    progress: 45,
  },
  {
    id: 3,
    name: 'UI/UX Design',
    instructor: 'Real_Dhagax',
    nextLesson: 'Color Theory',
    progress: 90,
  },
];

function CourseProgress() {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Course Progress</h2>

      <div className="flex flex-col gap-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-[#F5F6FA] rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">{course.name}</span>
              <span className="font-semibold text-gray-700">{course.progress}%</span>
            </div>

            <div className="w-full h-2 bg-gray-300 rounded-full mt-3 mb-3 overflow-hidden">
              <div
                className="h-full bg-gray-800 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Next: {course.nextLesson}</span>
              <span>{course.instructor}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseProgress;