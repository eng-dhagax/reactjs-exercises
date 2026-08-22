# Exercise 4 – Toggle Button

This exercise focuses on using React's **useState** hook to create an interactive toggle button.

## 🎯 Objective

The goal of this exercise is to practice:

- Using `useState` to manage component state
- Creating a reusable `ToggleButton` component
- Updating state when a button is clicked
- Rendering different content based on the current state
- Making the UI respond dynamically to state changes

## 🔘 Toggle Button

The `ToggleButton` component maintains a boolean state:

- `true` → displays **ON**
- `false` → displays **OFF**

Clicking the button toggles the state between `true` and `false`.

## ⚙️ How It Works

```text
Initial State
     │
     ▼
   false
     │
     ▼
   "OFF"
     │
  Click Button
     │
     ▼
    true
     │
     ▼
    "ON"
     │
  Click Button
     │
     ▼
   false
     │
     ▼
   "OFF"