# Exercise 20 – Todo App with Context, Reducer, and Tailwind CSS

## 🎯 Objective

The goal of this exercise is to build a functional Todo application using **React Context API**, **useReducer**, **useContext**, and **Tailwind CSS**.

The application allows users to add Todo items, mark them as completed, and delete them while sharing the Todo state across components using Context.

---

## 🚀 Features

- Add new Todo items.
- Mark Todos as completed or incomplete.
- Delete Todo items.
- Press `Enter` to quickly add a Todo.
- Prevents empty Todos from being added.
- Uses `useReducer` for Todo state management.
- Uses React Context API to share state and `dispatch`.
- Uses `useContext` inside child components.
- Uses reusable `TodoForm`, `TodoList`, and `TodoItem` components.
- Uses Tailwind CSS for styling.
- Displays completed Todos with a line-through effect.
- Includes hover effects and transitions.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to use `useContext` to access shared React state.
- How to combine Context API with `useReducer`.
- How to dispatch actions from child components.
- How to add new objects to application state.
- How to toggle the completed status of a Todo.
- How to delete a Todo using its ID.
- How to create reusable React components.
- How to use Tailwind CSS utility classes for styling.
- How to handle keyboard events with `onKeyDown`.
- How to conditionally apply Tailwind classes.

---

## 🔄 How It Works

The Todo application uses Context to share the state and `dispatch` function between components.

The main application uses:

```js
const [state, dispatch] = useReducer(reducer, initialState);