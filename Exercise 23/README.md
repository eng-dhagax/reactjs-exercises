# Exercise 23 – Developer Application Form

## 🎯 Objective

The goal of this exercise is to build a modern Developer Application Form using React and Tailwind CSS.

The application allows users to enter their personal information, select a developer role, choose their skills, accept terms and conditions, and submit their application.

It also includes form validation, automatic form data persistence, loading feedback, and a success modal.

---

## 🚀 Features

* Developer application form with a clean, modern UI.
* Full Name and Email input fields.
* Developer Role selection dropdown.
* Years of Experience input.
* Multiple skill selection checkboxes.
* Terms and Conditions checkbox.
* Optional notifications checkbox.
* Real-time field validation.
* Error messages for invalid fields.
* Visual feedback for valid and invalid inputs.
* Saves form data in `localStorage`.
* Restores saved form data when the application reloads.
* Submit button with a loading state.
* Success modal after successful submission.
* Reset button to clear the form.
* Responsive layout using Tailwind CSS.
* Reusable `SuccessModal` component.

---

## 🧠 What I Learned

In this exercise, I learned:

* How to manage complex form data using `useState`.
* How to use `useEffect` to synchronize form data with `localStorage`.
* How to create reusable React components.
* How to validate individual fields and an entire form.
* How to display validation errors conditionally.
* How to handle text inputs, number inputs, dropdowns, and checkboxes.
* How to manage multiple selected skills using arrays.
* How to save and restore data using browser storage.
* How to display a modal after successful submission.
* How to implement a loading state during submission.
* How to style form fields dynamically with Tailwind CSS.

---

## 🔄 How It Works

### 1. Managing Form State

The `useState` hook stores the user's application information.

```jsx
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  role: '',
  experience: '',
  skills: [],
  terms: false,
  notifications: false,
});
```

### 2. Form Validation

The application imports validation functions from `validation.js`.

```jsx
import {
  roles,
  skillsList,
  validateField,
  validateForm,
} from './validation';
```

The `validateField` function validates individual fields, while `validateForm` checks the complete form before submission.

### 3. Saving Form Data

The application uses `localStorage` to save the current form data.

```jsx
useEffect(() => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(formData)
    );
  } catch (error) {
    console.error('Could not save form data', error);
  }
}, [formData]);
```

This allows saved form values to be restored when the application is reopened in the same browser.

### 4. Selecting Skills

Users can select multiple skills. The application adds or removes each skill from the selected skills array.

```jsx
const newSkills = formData.skills.includes(skill)
  ? formData.skills.filter((s) => s !== skill)
  : [...formData.skills, skill];

updateField('skills', newSkills);
```

### 5. Submitting the Application

When the user submits the form, the application validates all fields before continuing.

```jsx
const newErrors = validateForm(formData);
setErrors(newErrors);

if (Object.keys(newErrors).length > 0) return;
```

If validation succeeds, the application displays a loading state and then shows the success modal.

### 6. Success Modal

The `SuccessModal` component displays a confirmation message after successful submission.

It receives two props:

* `name` — the applicant's name.
* `onClose` — a function used to close the modal.

---

## 👀 Preview

```text
┌──────────────────────────────────────────┐
│                                          │
│          Developer Application           │
│  Fill in the form below to apply.        │
│                                          │
│  Full Name *          Email *            │
│  [________________]   [________________] │
│                                          │
│  Role *               Years Experience * │
│  [Select a role ▼]    [______________]   │
│                                          │
│  Skills *                                │
│  □ React          □ JavaScript           │
│  □ HTML           □ CSS                  │
│                                          │
│  □ I accept the terms and conditions     │
│  □ Send me updates and notifications     │
│                                          │
│  [ Submit Application ]  [ Reset ]       │
│                                          │
└──────────────────────────────────────────┘

             After submission

┌──────────────────────────────────────────┐
│                                          │
│                    ✓                     │
│                                          │
│          Application submitted!          │
│                                          │
│  Thank you, Applicant. We have received  │
│  your application and will get back      │
│  to you soon.                            │
│                                          │
│                 [ Close ]                │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🧩 Project Components

### ApplicationForm

The main component that manages:

* Form state
* Input changes
* Validation errors
* Selected skills
* Local storage
* Form submission
* Loading state
* Reset functionality
* Success modal visibility

### SuccessModal

Displays a success message after the application has been submitted successfully.

### validation.js

Provides the role list, available skills, individual field validation, and complete form validation.

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* Tailwind CSS
* `useState`
* `useEffect`
* Form Validation
* Browser `localStorage`
* Conditional Rendering
* Reusable Components

---

## 📁 Project Structure

```text
Exercise 23/
│
├── ApplicationForm.jsx
├── SuccessModal.jsx
├── validation.js
└── App.jsx
```

*Note: Update the filenames in this structure if your actual project uses different names.*

---

## ▶️ Getting Started

1. Open the project folder.
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser.
5. Complete the required fields and select your skills.
6. Submit the application to see the success modal.

---

## 📌 Key Concepts

* React State Management
* `useState`
* `useEffect`
* Controlled Components
* Form Validation
* Event Handling
* `localStorage`
* Array Methods
* Conditional Rendering
* Loading States
* Modal Components
* Tailwind CSS

---

## 🎯 Goal

The main goal of this exercise is to build a complete application form while practicing advanced React form handling, validation, browser storage, reusable components, and user feedback.

---

## 👨‍💻 Author

**Real_Dhagax**

Part of my React.js learning journey with the **Dugsiiye Mentorship Program**.
