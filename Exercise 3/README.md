# Exercise 3 – React Props

This exercise focuses on using **Props in React** to pass data from a parent component to a reusable child component.

## 🎯 Objective

The goal of this exercise is to practice:

- Creating reusable React components
- Passing data from a parent component to a child component
- Using props in functional components
- Reusing the same component with different data

## 🧩 Components

### App

The `App` component renders multiple `UserCard` components and passes different user information to each one.

The following props are passed:

- `CurrentName`
- `CurrentEmail`

### UserCard

The `UserCard` component receives the props and displays the user's name and email.

```jsx
const UserCard = ({ CurrentName, CurrentEmail }) => {
  return (
    <div>
      <h1>Name: {CurrentName}</h1>
      <h4>Email: {CurrentEmail}</h4>
    </div>
  );
};
```

## 🔗 Component Structure

```text
App
 ├── UserCard
 ├── UserCard
 ├── UserCard
 ├── UserCard
 ├── UserCard
 ├── UserCard
 ├── UserCard
 └── UserCard
```

Each `UserCard` receives different values through props.

## 🖥️ Preview

```text
┌─────────────────────────────────┐
│ Name: Real_Dhagax               │
│ Email: dhgx@gmail.com           │
├─────────────────────────────────┤
│ Name: Hooyo Faatima             │
│ Email: hooyo@gmail.com          │
├─────────────────────────────────┤
│ Name: Dr Gacal                  │
│ Email: gacal@gmail.com          │
├─────────────────────────────────┤
│ Name: Mc Hamuuda                │
│ Email: mc@gmail.com              │
├─────────────────────────────────┤
│ Name: Xaliye Ali                │
│ Email: xaliye@gmail.com         │
├─────────────────────────────────┤
│ Name: Khadar                    │
│ Email: kadar@gmail.com          │
├─────────────────────────────────┤
│ Name: Sheikh Mustafe            │
│ Email: mustafe@gmail.com        │
├─────────────────────────────────┤
│ Name: Mohamed Omar              │
│ Email: mohamed@gmail.com        │
└─────────────────────────────────┘
```

## 📁 Project Structure

```text
Exercise 3/
└── src/
    ├── App.jsx
    └── UserCard.jsx
```

## 🛠️ Technologies

- React.js
- JavaScript (JSX)

## 📚 What I Learned

Through this exercise, I practiced how to:

1. Create reusable React components.
2. Pass data from a parent component to a child component using props.
3. Receive props using destructuring.
4. Reuse one component with different data.
5. Display dynamic values inside JSX.

## 👨‍💻 Author

**Real_Dhagax**

Software Engineering student learning React.js through the Dugsiiye mentorship program.