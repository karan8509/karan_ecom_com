# 🛒 Karan E-Commerce Frontend

A simple React-based e-commerce frontend built using data from [DummyJSON Products API](https://dummyjson.com/products).  
This app demonstrates routing, global state management using **Zustand**, and component-based architecture.

---

## 🚀 Tech Stack

- **React.js** – Frontend Library
- **React Router DOM** – For routing between pages
- **Zustand** – Lightweight global state management
- **Tailwind CSS** – For responsive and clean UI styling
- **DummyJSON API** – For mock product data

---

## 🗂️ Project Structure

```bash
├── components/
│   ├── Navbar.jsx
│   ├── Product.jsx
│   ├── AddToCart.jsx
│   └── AddToLike.jsx
│
├── pages/
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── store/
│   └── userProduct.js  # Zustand store for global state
│
├── App.jsx
└── README.md
