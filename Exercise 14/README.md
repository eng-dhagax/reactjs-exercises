# Exercise 14 – Multi-Step Registration Form

This exercise is a React.js multi-step registration form that uses the `useReducer` hook to manage form data and navigation between different steps.

The form collects profile and contact information, displays the entered information for review, and allows the user to confirm or restart the registration.

## 🎯 Objective

The goal of this exercise is to practice:

- Using React `useReducer`
- Managing complex form state
- Creating a reducer with multiple actions
- Updating dynamic form fields
- Navigating between multiple form steps
- Using conditional rendering
- Reviewing form data before submission
- Resetting the form state

## 📝 Multi-Step Registration

The registration form contains three main steps:

1. **Profile**
2. **Contact**
3. **Review**

### Step 1: Profile

The user enters:

- First Name
- Last Name

```text
┌─────────────────────────────────┐
│ Multi-Step Registration│
│                                 │
│ Step 1: Profile│
│                                 │
│ First Name: [____________]      │
│ Last Name:  [____________]      │
│                                 │
│ [ Next ]             │
└─────────────────────────────────┘