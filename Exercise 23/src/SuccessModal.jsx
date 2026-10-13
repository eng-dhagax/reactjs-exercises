import React from 'react';

function SuccessModal({ name, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <h2 className="text-xl font-bold text-gray-900">Application submitted!</h2>
        <p className="mt-2 text-sm text-gray-500">
          Thank you{name ? `, ${name}` : ''}. We have received your application and
          will get back to you soon.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;