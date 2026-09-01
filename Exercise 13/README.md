# Exercise 13 – Double Counter with useReducer

This exercise is a React.js application that demonstrates how to manage multiple related state values using the `useReducer` hook.

The application contains two counters, Counter A and Counter B, with individual increment and decrement controls and a button to reset both counters.

## 🎯 Objective

The goal of this exercise is to practice:

- Using React `useReducer`
- Creating an initial state
- Creating a reducer function
- Working with actions
- Using `dispatch()` to update state
- Managing multiple state values with one reducer
- Resetting the complete state
- Disabling decrement buttons when a counter reaches zero

## 🔢 Double Counter

The application contains two independent counters:

- Counter A
- Counter B

Each counter can be increased or decreased separately.

```text
Double Counter

Counter A: 0
[ - A ] [ + A ]

Counter B: 0
[ - B ] [ + B ]

[ Reset All ]