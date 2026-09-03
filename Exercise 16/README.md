# Exercise 16 – Shopping Cart with React Context

## 🎯 Objective

The goal of this exercise is to learn how to use the **React Context API** to manage and share shopping cart data between multiple components without passing props manually.

The application allows users to add products to a shopping cart and remove products from the cart using shared state provided through `CartContext`.

---

## 🚀 Features

- Uses `useState` to manage cart items.
- Uses `CartContext.Provider` to share cart data and functions.
- Allows users to add products to the cart.
- Allows users to remove products from the cart.
- Displays products using a reusable `ProductItem` component.
- Displays cart information using a `CartSummary` component.
- Demonstrates how Context API can reduce prop drilling.

---

## 🧠 What I Learned

In this exercise, I learned:

- How to use React Context for shared application state.
- How to create a shopping cart state using `useState`.
- How to add items to an array using `setCartItems`.
- How to remove items using `filter()`.
- How to share state and functions through `Context.Provider`.
- How multiple components can access the same shared cart data.
- How Context API can help avoid unnecessary prop drilling.

---

## 🔄 How It Works

The cart starts with an empty array:

```js
const [cartItems, setCartItems] = useState([]);