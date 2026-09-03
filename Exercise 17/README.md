# Exercise 17 – Contact Form with Custom Hook

## 🎯 Objective

The goal of this exercise is to learn how to create and use a **Custom React Hook** to manage form state and input changes.

The application uses a reusable `useForm` hook to handle the values, input changes, and resetting of a contact form.

---

## 🚀 Features

- Uses a custom `useForm` hook.
- Manages multiple form fields with shared logic.
- Includes Name, Email, and Message fields.
- Handles input changes using `handleChange`.
- Prevents the default form submission behavior.
- Logs submitted form data to the console.
- Resets the form after submission.
- Uses HTML `required` validation.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to create a reusable Custom Hook in React.
- How to manage form state with a custom hook.
- How to handle multiple input fields with one `handleChange` function.
- How to reset form values using `resetForm`.
- How to handle form submission with `onSubmit`.
- How reusable hooks can reduce duplicated code.

---

## 🔄 How It Works

The `ContactForm` component uses the custom `useForm` hook:

```js
const { values, handleChange, resetForm } = useForm({
  name: "",
  email: "",
  message: "",
});