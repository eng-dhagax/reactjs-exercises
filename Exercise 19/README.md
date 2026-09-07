# Exercise 19 – Todo App with Context, Reducer, and CSS Modules

## 🎯 Objective

The goal of this exercise is to build a Todo application using **React Context API**, **useReducer**, and **CSS Modules**.

The application demonstrates how Context and Reducer can be combined to manage shared Todo state, while CSS Modules are used to keep component styling organized and scoped.

---

## 🚀 Features

- Uses `useReducer` to manage Todo application state.
- Uses React Context API to share state and dispatch functions.
- Allows users to add and manage Todo items.
- Uses reusable `TodoForm` and `TodoList` components.
- Uses CSS Modules for component-specific styling.
- Provides a clean and responsive Todo application layout.
- Separates state management, components, and styling.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to combine `useReducer` with React Context.
- How to share state between components using `Context.Provider`.
- How to pass `state` and `dispatch` through Context.
- How to organize a React application into reusable components.
- How to use CSS Modules in React.
- How CSS Modules help prevent class name conflicts.
- How to separate application logic from presentation and styling.

---

## 🔄 How It Works

The `TodoApp` component manages the Todo state using `useReducer`:

```js
const [state, dispatch] = useReducer(reducer, initialState);