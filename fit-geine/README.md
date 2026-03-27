# 🏋️‍♂️ Fitness Web App (React + Vite)

A modern **Fitness & Training Web Application** built with **React + TypeScript**, designed to help users manage workouts, nutrition plans, and explore fitness services.

---

## 🚀 Features

### 🔐 Authentication System

* User Login & Register
* Email Verification (OTP)
* Logout functionality
* Token-based authentication

### 🏠 Core Pages

* Home Dashboard
* About Page
* Contact Us
* Blog Page
* Pricing Plans

### 💪 Fitness Features

* Workout Plans 🏋️
* Nutrition Plans 🥗
* Fitness Services:

  * Fitness Training
  * Body Building
  * CrossFit
  * Cardio

### 👤 User Features

* Profile صفحة شخصية
* Secure routing
* Session handling (token-based)

### 💳 Payment

* Integrated Payment Form

### ⚠️ Error Handling

* Custom 404 Not Found Page

---

## 🧱 Tech Stack

* **Frontend:** React + TypeScript
* **Routing:** React Router DOM (HashRouter)
* **3D Support:** @react-three/fiber (Canvas)
* **Styling:** CSS
* **State Management:** React Hooks

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Home/
│   │   └── PaymentForm.jsx
│   ├── Workout/
│   │   └── WorkoutPlan.jsx
│   ├── NutrationPlan/
│   │   └── Nutrition.jsx
│   ├── Services_fitness/
│   ├── Services_building/
│   ├── Services_crossfit/
│   ├── Services_cardio/
│   ├── Trainers/
│   │   └── Profile.jsx
│   ├── Otp/
│   │   └── VerifyEmail.jsx
│   ├── LogOut/
│   └── ...
│
└── App.tsx
```

---

## 🧭 Routing Overview

### 🔑 Main Routes

| Route       | Description        |
| ----------- | ------------------ |
| `/login`    | Login Page         |
| `/register` | Register Page      |
| `/verify`   | Email Verification |
| `/home`     | Main Dashboard     |
| `/profile`  | User Profile       |

### 📄 Pages

| Route        | Description   |
| ------------ | ------------- |
| `/about`     | About Page    |
| `/blog`      | Blog          |
| `/contactUs` | Contact Page  |
| `/pricing`   | Pricing Plans |

### 💪 Fitness Routes

| Route        | Description     |
| ------------ | --------------- |
| `/workout`   | Workout Plans   |
| `/nutration` | Nutrition Plans |
| `/fitness`   | Fitness Service |
| `/building`  | Body Building   |
| `/crossfit`  | CrossFit        |
| `/cardio`    | Cardio          |

### 💳 Other

| Route      | Description    |
| ---------- | -------------- |
| `/payment` | Payment Form   |
| `/logout`  | Logout         |
| `*`        | Not Found Page |

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/fitness-app.git

# Navigate to project folder
cd fitness-app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🧠 App Architecture

* Routing handled using **HashRouter**
* State managed via **React useState**
* Authentication handled with:

  * `loggedIn` state
  * `token` storage
* Modular component-based structure

---

## 🎯 Future Improvements

* 🔐 Protected Routes (currently basic state)
* 🌐 API Integration (Backend)
* 📱 Fully Responsive Design
* 🧠 AI Workout Recommendations
* 📊 Progress Tracking Dashboard

---

## 👨‍💻 Author

Developed by **[Mostafa Sayed]**

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🚀 Share it

---

## 📄 License

This project is licensed under the MIT License.
 
