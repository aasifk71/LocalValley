

---

## 🧳 LocalValley – Discover Unique Stays & Seamless Travel Experiences

**LocalValley** is a full-featured, full-stack web application built using the **MERN stack** (MongoDB, Express.js, Node.js — without React). It enables users to discover, list, and review unique accommodations across the globe, with a strong focus on usability, security, and seamless interactions.

This platform reflects my skills in designing, building, and deploying scalable web apps using modern technologies and best practices in full-stack development.

🔗 **Live Demo**: [https://localvalley.onrender.com](https://localvalley.onrender.com)

---

## 📌 Table of Contents

* [Key Features](#-key-features)
* [Technologies Used](#-technologies-used)
* [Technical Implementation](#%ef%b8%8f-technical-implementation)
* [Dependencies](#-dependencies)
* [Setup Instructions](#-setup-instructions)
* [Environment Variables](#-environment-variables)
* [Explore the Code](#-explore-the-code)
* [Contact](#-contact)

---

## ✅ Key Features

### 🔐 User Authentication

* Secure signup and login using session-based auth
* Restricted access for protected routes

### 🏡 Listing Management

* Full CRUD for listings (title, description, images, amenities, pricing)
* Users can add, edit, and delete their own properties

### ✨ Review System

* Authenticated users can leave reviews
* Only users who interacted with a listing can leave feedback

### 🗘️ Interactive Map

* Mapbox integration for geographic visualization
* Each listing is shown on an interactive map

### 🔒 Permission Control

* Only listing owners can update/delete their listings
* Only review authors can remove their reviews

---

## 🛠️ Technologies Used

| Layer          | Technologies                          |
| -------------- | ------------------------------------- |
| Frontend       | HTML, CSS, JavaScript, Bootstrap, EJS |
| Backend        | Node.js, Express.js                   |
| Database       | MongoDB                               |
| Authentication | Passport.js                           |
| File Uploads   | Multer, Cloudinary                    |
| Maps           | Mapbox                                |
| Deployment     | Render                                |

---

## ⚙️ Technical Implementation

### 🌐 RESTful API

* Clean REST architecture for scalability
* Modular routes for listings, users, and reviews

### ✍️ CRUD Support

* Full create/read/update/delete support for listings & reviews

### 🔁 Middleware & Sessions

* Secure session handling via `express-session` + Passport
* Custom middleware for validation, errors, and auth

### 🧚 Validation

* Input validation using **Joi**

### 📸 Image Uploads

* Image handling with **Multer**
* Image storage via **Cloudinary**

### 🗘️ Map Integration

* Listings include geolocation data shown via **Mapbox**

### 🧱 MVC Structure

* Separation of concerns using **Model-View-Controller** architecture

---

## 📦 Dependencies

```
@mapbox/mapbox-sdk
bootstrap
cloudinary
connect-flash
cookie-parser
dotenv
ejs, ejs-mate
express, express-session
joi
method-override
mongoose
multer, multer-storage-cloudinary
passport, passport-local, passport-local-mongoose
```

---

## 🧚 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/aasifk71/LocalValley.git
cd LocalValley
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🌍 Environment Variables

Create a `.env` file and add:

```
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
DB_URL=your_mongo_connection_string
SECRET=session_secret_key
```

---

## ▶️ Start the Application

```bash
cd init
node index.js
cd ..
nodemon app.js
```

> Server runs at: `http://localhost:8080`

---

## 🔍 Explore the Code

💻 GitHub Repo: [https://github.com/aasifk71/LocalValley](https://github.com/aasifk71/LocalValley)

---

## 📬 Contact

* 🔗 [LinkedIn – Mohd Aasif](https://www.linkedin.com/in/mohd-aasif-80568b2a7)
* 📧 Feel free to reach out for collaboration, feedback, or questions.

---

> 💻 *Code. Build. Learn. Repeat.* – Mohd Aasif
