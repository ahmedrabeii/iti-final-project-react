
# Bartleby Library

## Overview
Bartleby Library is a modern digital library web application built with React. It allows users to explore book categories, view book details, and manage a shopping cart experience using data from the Open Library API. The application is designed with a clean UI, responsive layout, and interactive user experience.

## Features
- **Category-Based Browsing**: Choose from various book categories like Romance, Fantasy, Art, and more
- **Book Details View**: Explore detailed information about individual books
- **Add to Cart**: Users can add books to a virtual cart using localStorage
- **Responsive Design**: Optimized for all devices including mobile, tablet, and desktop
- **Search & Navigation**: Easy navigation using React Router and a custom Navbar
- **Loading States & Notifications**: Smooth UX with loaders and toast messages

## Technologies Used

### Frontend
- **React 19**: Core library for building the user interface
- **React Router 7**: Routing between pages and dynamic paths
- **Bootstrap 5**: Responsive layout and components
- **Font Awesome & React Icons**: Icons for categories and cart
- **React Toastify**: Notifications for user actions (e.g., add to cart)

### Development Tools
- **Vite**: High-performance dev/build tool
- **ESLint**: Ensures code quality
- **npm**: Package and dependency management

### API
- **Open Library API**: Source of books, categories, covers, and descriptions  
  🔗 [https://openlibrary.org/developers/api](https://openlibrary.org/developers/api)


## Getting Started

### Prerequisites
- Node.js (v16+)
- npm (v7+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ahmedrabeii/iti-final-project.git
cd final-project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

## Project Structure
```
├── public/                      # Public assets (if any)
├── src/
│   ├── Components/              # Navbar component
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Pages/                   # All page components
│   │   ├── Home/                # Home page
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   └── assets/Book.jpg
│   │   ├── Categories/          # Book categories
│   │   │   ├── Categories.jsx
│   │   │   └── Categories.css
│   │   ├── CategoryBooks/       # Books in a specific category
│   │   │   ├── CategoryBooks.jsx
│   │   │   └── CategoryBooks.css
│   │   ├── Product/             # Book details
│   │   │   ├── ProductDetails.jsx
│   │   │   └── ProductDetails.css
│   │   └── Carts/               # Shopping cart page
│       │   ├── Carts.jsx
│       │   └── Carts.css
│   ├── Service/
│   │   └── Api.jsx              # API call helper
│   ├── App.jsx                  # App router & structure
│   ├── App.css                  # Global styles
│   ├── index.css                # Reset/default styles
│   └── main.jsx                 # App entry point
├── index.html                   # Root HTML template
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── .gitignore
```

## 📸 Screenshots

### 🏠 Home Page
![Home](./screenshots/home.png)

### 🛒 Cart Page
![Cart](./screenshots/Carts.png)

### 📖 Book Details
![Details](./screenshots/ProductDetails.png)

### 📚 Categories Page
![Categories](./screenshots/Categorise.png)

### 📚 Books Page
![Books](./screenshots/CategoryBooks.png)


## License
MIT

## Acknowledgements
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)