export const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
  'Product Manager',
];

export const skillsList = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'UI Design',
  'API Development',
];

export function validateFullName(value) {
  const name = value.trim();
  if (!name) return 'Full name is required';
  if (!/^[A-Za-z ]+$/.test(name)) return 'Only letters and spaces are allowed';
  if (name.length < 2) return 'Name must be at least 2 characters';
  if (name.length > 30) return 'Name must be 30 characters or less';
  return '';
}

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

export function validateRole(value) {
  if (!value) return 'Please select a role';
  return '';
}

export function validateExperience(value) {
  if (value === '') return 'Years of experience is required';
  const years = Number(value);
  if (Number.isNaN(years)) return 'Please enter a valid number';
  if (years < 0 || years > 50) return 'Experience must be between 0 and 50 years';
  return '';
}

export function validateSkills(value) {
  if (value.length === 0) return 'Select at least one skill';
  return '';
}

export function validateTerms(value) {
  if (!value) return 'You must accept the terms and conditions';
  return '';
}

export function validateField(name, value) {
  switch (name) {
    case 'fullName':
      return validateFullName(value);
    case 'email':
      return validateEmail(value);
    case 'role':
      return validateRole(value);
    case 'experience':
      return validateExperience(value);
    case 'skills':
      return validateSkills(value);
    case 'terms':
      return validateTerms(value);
    default:
      return '';
  }
}

export function validateForm(data) {
  const errors = {};
  const fields = ['fullName', 'email', 'role', 'experience', 'skills', 'terms'];

  fields.forEach((field) => {
    const message = validateField(field, data[field]);
    if (message) errors[field] = message;
  });

  return errors;
}