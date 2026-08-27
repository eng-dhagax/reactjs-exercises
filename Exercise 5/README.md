# Exercise 5 – Simple Shopping Cart

This exercise is a React.js shopping cart application built to practice managing dynamic data and user interactions with the `useState` Hook.

## 📌 Exercise Overview

The application allows users to:

- Add products to the shopping cart
- Enter a product name and price
- Increase product quantity
- Decrease product quantity
- Remove products from the cart
- Calculate the total price automatically
- Display an empty-cart message when there are no products

## 🛠️ Technologies Used

- React.js
- JavaScript (JSX)
- React `useState`
- Vite
- HTML/CSS

## ✨ Features

### Add Products
Users can enter a product name and price, then click **Add To Cart** to add the product to the cart.

### Manage Quantity
Each product has a quantity starting at `1`.

- `+` increases the quantity
- `-` decreases the quantity
- Quantity cannot go below `1`

### Remove Products
Users can remove individual products from the shopping cart.

### Total Price
The application calculates the total price based on:

**Product Price × Quantity**

The total is updated whenever products or quantities change.

## 📂 Project Structure

```text
Exercise 5/
├── src/
│   ├── App.jsx
│   ├── ShopingCart.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md