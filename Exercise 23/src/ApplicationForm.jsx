import React, { useState, useEffect } from 'react';
import { roles, skillsList, validateField, validateForm } from './validation';
import SuccessModal from './SuccessModal';

const STORAGE_KEY = 'developerApplicationForm';

const initialData = {
  fullName: '',
  email: '',
  role: '',
  experience: '',
  skills: [],
  terms: false,
  notifications: false,
};

function loadSavedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
  } catch (error) {
    return initialData;
  }
}

function ApplicationForm() {
  const [formData, setFormData] = useState(loadSavedData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error('Could not save form data', error);
    }
  }, [formData]);

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField(name, type === 'checkbox' ? checked : value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name]) }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    updateField('skills', newSkills);
  };

  const handleReset = () => {
    setFormData(initialData);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      role: true,
      experience: true,
      skills: true,
      terms: true,
    });

    if (Object.keys(newErrors).length > 0) return; 

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmittedName(formData.fullName.trim());
      handleReset();
      setIsSubmitting(false);
      setShowModal(true);
    }, 1500);
  };

  const hasError = (name) => touched[name] && errors[name];
  const isValid = (name) => touched[name] && !errors[name];

  const inputClass = (name) => {
    const base =
      'w-full rounded-lg border py-2.5 pl-10 pr-9 text-sm outline-none transition focus:ring-2';
    if (hasError(name)) return `${base} border-red-500 bg-red-50 focus:ring-red-200`;
    if (isValid(name)) return `${base} border-green-500 focus:ring-green-200`;
    return `${base} border-gray-300 focus:border-indigo-500 focus:ring-indigo-200`;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8"
      >
        <h1 className="text-2xl font-bold text-gray-900">Developer Application</h1>
        <p className="mt-1 mb-6 text-sm text-gray-500">
          Fill in the form below to apply for a position.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">👤</span>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Real Dhagax"
                className={inputClass('fullName')}
              />
              {isValid('fullName') && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">✓</span>
              )}
            </div>
            {hasError('fullName') && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">✉️</span>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Dhagax@example.com"
                className={inputClass('email')}
              />
              {isValid('email') && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">✓</span>
              )}
            </div>
            {hasError('email') && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="mb-1 block text-sm font-medium text-gray-700">
              Role *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">💼</span>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass('role')}
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            {hasError('role') && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
          </div>

          {/* Years of Experience */}
          <div>
            <label htmlFor="experience" className="mb-1 block text-sm font-medium text-gray-700">
              Years of Experience *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">⏳</span>
              <input
                id="experience"
                name="experience"
                type="number"
                min="0"
                max="50"
                value={formData.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="0 - 50"
                className={inputClass('experience')}
              />
            </div>
            {hasError('experience') && (
              <p className="mt-1 text-xs text-red-600">{errors.experience}</p>
            )}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-gray-700">Skills *</p>
          <div
            className={`grid grid-cols-2 gap-2 rounded-lg border p-3 sm:grid-cols-4 ${
              hasError('skills')
                ? 'border-red-500 bg-red-50'
                : isValid('skills')
                ? 'border-green-500'
                : 'border-gray-300'
            }`}
          >
            {skillsList.map((skill) => (
              <label key={skill} className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  className="h-4 w-4 accent-indigo-600"
                />
                {skill}
              </label>
            ))}
          </div>
          {hasError('skills') && <p className="mt-1 text-xs text-red-600">{errors.skills}</p>}
        </div>

        {/* Terms & Notifications */}
        <div className="mt-5 space-y-3">
          <div>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 accent-indigo-600"
              />
              I accept the terms and conditions *
            </label>
            {hasError('terms') && <p className="mt-1 text-xs text-red-600">{errors.terms}</p>}
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-4 w-4 accent-indigo-600"
            />
            Send me updates and notifications
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
              </svg>
            )}
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            Reset
          </button>
        </div>
      </form>

      {showModal && <SuccessModal name={submittedName} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default ApplicationForm;