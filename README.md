# StudyMate

live Link:https://vocal-piroshki-4977a8.netlify.app/

---

## 📌 Project Overview

**StudyMate** is a collaborative learning platform built with the **MERN stack**. It helps students connect with suitable study partners based on subjects, study preferences, and locations, making learning more interactive, engaging, and goal-oriented.

This project allows students to:
- Create and update profiles
- Find study partners
- Connect and collaborate
- Explore learning opportunities easily

---

## 🚀 Features

- **User Authentication:** Signup/Login with Firebase Authentication
- **Profile Management:** Update profile, add study preferences
- **Partner Search:** Find study partners based on subjects, preferences, and location
- **Secure Routing:** Protected routes for authenticated users
- **Responsive Design:** Works perfectly on mobile, tablet, and desktop
- **Real-time Data:** Dynamic fetching of study partners and connections

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Hosting:** Netlify (Frontend), Render / Heroku (Backend)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB account / local instance
- Firebase project (for Authentication)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/sawon687/React-StudyMate-clientside-app.git
...bash
cd React-StudyMate-clientside-app

npm install
# or
yarn install
Setup environment variables:

Create a .env file in the root folder

Add Firebase API keys, MongoDB URI, and other secrets:

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
MONGO_URI=your_mongodb_uri

npm run dev
# or
yarn dev



