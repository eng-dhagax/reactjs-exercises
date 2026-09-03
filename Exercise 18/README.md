# Exercise 18 – Contact Management App

## 🎯 Objective

The goal of this exercise is to build a **Contact Management App** using React state management techniques.

This exercise combines `useReducer`, `useState`, and `useEffect` to manage contacts and handle adding and editing contact information.

---

## 🚀 Features

- Add new contacts.
- Edit existing contacts.
- Cancel contact editing.
- Manage contacts using `useReducer`.
- Manage form state using `useState`.
- Use `useEffect` to update the form when editing a contact.
- Validate required contact fields.
- Store contact information including:
  - Name
  - Email
  - Phone
  - ID
  - Favorite status
- Use reusable `ContactForm` and `ContactList` components.
- Dispatch actions to update the contact state.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to use `useReducer` for managing complex application state.
- How to use `dispatch` to send actions to a reducer.
- How to manage local form state with `useState`.
- How `useEffect` can synchronize form data with an edited contact.
- How to create reusable React components.
- How to handle form submission and input changes.
- How to add and edit objects inside an array of contacts.
- How to pass state, functions, and dispatch between components.

---

## 🔄 How It Works

The main `ContactApp` component uses `useReducer` to manage the contacts:

```js
const [state, dispatch] = useReducer(reducer, initialState);