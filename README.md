# ProductHub – Fullstack Test Project

This project is a simple **fullstack application** built with **React (frontend)** and **Node.js + Express + PostgreSQL (backend)**.  
It demonstrates user authentication, product management, and integration of styled UI components.

---

## 🚀 Tech Stack

### Frontend

- **React** (with React Router)
- **Redux Toolkit** (state management)
- **Ant Design + Tailwind CSS** (UI components & styling)
- **Axios** (API calls)

---

## 📂 Project Structure

# 🌐 Product Management Frontend (React + Tailwind + Ant Design)

This is the **frontend** for the Product Management Web Application.  
It provides a user-friendly interface to create and view products linked to multiple users.

---

## 🚀 Features

- Built with **React.js**
- Styled with **Tailwind CSS** and **Ant Design (AntD)** components
- Responsive design with mobile-friendly navigation
- Form validation for product creation and user authentication
- Login/Logout functionality with Redux state management
- Communicates with the backend API to store and retrieve product data

---

## 📂 Project Structure

frontend/
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (Login, Register, Products)
│ ├── redux/ # Redux slices and store
│ ├── services/ # API service calls
│ ├── App.js # Main React component
│ └── index.js # Entry point
│
│── public/
│ ├── index.html
│ └── ...
│
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── README.md

---

## ⚙️ Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS + Ant Design (AntD)
- **State Management**: Redux + Redux Toolkit
- **HTTP Client**: Axios
- **Form Validation**: AntD Form + custom validation
- **Environment Config**: `.env` for backend API URL

---

## 🛠️ Installation & Setup

1. Clone the repository:

git clone https://github.com/yourusername/product-management-app.git
cd product-management-app/frontend

2. Install dependencies:

npm install

3. Run the development server:

npm start

4. The app will be available at http://localhost:3000.

## API Integration

- All API requests are made to the backend URL defined in .env
- Axios is configured in src/services/api.js

- Example endpoints:
  POST /api/products → create a product
  GET /api/products/:userId → fetch products for a user

## ✅ Evaluation Criteria

- UI Design → Clean, responsive, user-friendly

- Code Quality → Component-based, modular, maintainable

- Form Validation → Prevent invalid product submissions

- API Integration → Proper interaction with backend endpoints

## 📦 Deployment

The frontend can be deployed on: Netlify
