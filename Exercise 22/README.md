# Exercise 22 – Registration Form with React useState

## 🎯 Objective

The goal of this exercise is to learn how to manage form data in React using the `useState` hook.

The application provides a registration form with different input types, including text, email, password, checkbox, and select dropdown. After submission, the entered information is displayed on the page.

---

## 🚀 Features

* Uses `useState` to manage form data.
* Includes Username, Email, and Password fields.
* Supports newsletter subscription using a checkbox.
* Includes a country selection dropdown.
* Uses a single `handleChange` function for multiple inputs.
* Handles checkbox values using the `checked` property.
* Prevents the default form submission behavior.
* Displays submitted data dynamically.
* Uses conditional rendering to show submitted information.
* Logs form data to the browser console.

---

## 🧠 What I Learned

In this exercise, I learned:

* How to manage form state using `useState`.
* How to create controlled inputs in React.
* How to handle multiple input fields with one function.
* How to handle checkbox values using `checked`.
* How to work with select dropdowns.
* How to handle form submission using `onSubmit`.
* How to prevent page refresh using `e.preventDefault()`.
* How to display submitted information using conditional rendering.
* How to use object spread syntax to update state.

---

## 🔄 How It Works

### Form State

The form starts with an initial state:

```js
const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  subscribe: false,
  country: "",
});
```

### Handling Input Changes

A single `handleChange` function manages all form fields:

```js
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};
```

This function handles regular input values and checkbox states.

### Form Submission

When the user submits the form:

```js
const handleSubmit = (e) => {
  e.preventDefault();
  setSubmittedData(formData);
  console.log("Form Data:", formData);
};
```

The submitted information is saved in `submittedData` and displayed on the page.

---

## 👀 Preview

```text
┌──────────────────────────────────────┐
│                                      │
│          Registration Form           │
│                                      │
│  Username:                           │
│  [____________________________]      │
│                                      │
│  Email:                              │
│  [____________________________]      │
│                                      │
│  Password:                           │
│  [____________________________]      │
│                                      │
│  Subscribe to newsletter:            │
│  [✓]                                 │
│                                      │
│  Country:                            │
│  [ Somalia                    ▼ ]    │
│                                      │
│          [ Submit ]                  │
│                                      │
├──────────────────────────────────────┤
│           Submitted Data             │
│                                      │
│  Username: Real_Dhagax               │
│  Email: superaic77@gmail.com            │
│  Password: ********                  │
│  Subscribed: Yes                     │
│  Country: somalia                    │
│                                      │
└──────────────────────────────────────┘
```

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* React `useState`
* Controlled Components
* Form Handling
* Conditional Rendering

---

## 📁 Project Structure

```text
Exercise 22/
│
├── RegistrationForm.jsx
└── App.jsx
```

---

## ▶️ Getting Started

1. Open the project folder.

2. Install the project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser.

5. Fill in the registration form and click **Submit**.

6. View the submitted information displayed below the form.

---

## 📌 Key Concepts

* `useState`
* Controlled Inputs
* `handleChange`
* `handleSubmit`
* `onChange`
* `onSubmit`
* `e.preventDefault()`
* Checkbox Handling
* Select Dropdown
* Conditional Rendering
* State Management

---

## 🎯 Goal

The main goal of this exercise is to understand how React manages form data using state and how submitted information can be displayed dynamically.

This exercise provides practical experience with **controlled components, event handling, form submission, and conditional rendering**.

---

## 👨‍💻 Author

**Real_Dhagax**

Part of my React.js learning journey with the **Dugsiiye Mentorship Program**.
