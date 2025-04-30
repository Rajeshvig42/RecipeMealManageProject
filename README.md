# 🍽️ RecipeMealManageProject

A full-stack Node.js application for user registration, login, and ordering meals using:

- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**
- **EJS templating**

---

## ✅ Features

- 👤 User Signup (Name, Username, Email, Password)
- 🔐 Username-based Login
- 🛒 Order your favorite meal (Pizza, Pasta, Salad, etc.)
- 🗂️ MongoDB integration with Mongoose
- 🌐 Fully functioning front-end using EJS

---

## 🚀 How to Run

### 1. Clone this repo or download the ZIP

```bash
git clone https://github.com/Rajeshvig42/RecipeMealManageProject.git
cd RecipeMealManageProject
2. Install dependencies
npm install
3. Set up .env file (already included)
MONGO_URI=mongodb://localhost:27017/recipemealdb
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
4. Start MongoDB server (if needed)
net start MongoDB
5. Start the server
node server.js
Then go to:

http://localhost:5000/ → Welcome Page

http://localhost:5000/signup → Register

http://localhost:5000/login → Login

http://localhost:5000/order → Place an Order

📁 Folder Structure
├── backend/
│   └── models/
├── middleware/
├── views/
├── public/
├── server.js
├── .env
└── package.json
📝 Author
Rajesh Vig
GitHub: Rajeshvig42
