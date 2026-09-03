# Exercise 15 – Language Switching with React Context

## 🎯 Objective

The goal of this exercise is to learn how to use the **React Context API** to share language information between components without passing props manually.

The application allows the user to switch between **English** and **Somali** using a language toggle button.

---

## 🚀 Features

- Uses `useState` to manage the current language.
- Uses `LanguageContext.Provider` to share the language value.
- Supports two languages:
  - English (`en`)
  - Somali (`so`)
- Allows users to switch between English and Somali.
- Uses a separate `Greeting` component to consume the language context.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to create and use React Context.
- How `Context.Provider` shares data with child components.
- How to manage state with `useState`.
- How to toggle between two language values.
- How Context can reduce the need for prop drilling.
- How components such as `Greeting` can access shared application data.

---

## 🔄 How It Works

The application starts with English:

```js
const [language, setLanguage] = useState('en');

👀 Preview
┌──────────────────────────────────┐
│                                  │
│  Switch to Somali                │
│                                  │
│  Hello!                          │
│                                  │
└──────────────────────────────────┘

              ↓ Click

┌──────────────────────────────────┐
│                                  │
│  Switch to English               │
│                                  │
│  Salaan!                         │
│                                  │
└──────────────────────────────────┘