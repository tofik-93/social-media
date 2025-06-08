Social Media App
This is a full-stack social media application built with a Node.js/Express.js backend and a React frontend. The backend uses MongoDB for data storage and implements user authentication, posts, comments, likes, and follows. The frontend, styled with Tailwind CSS, provides a user-friendly interface for users to sign up, log in, create posts, and interact with content.
Table of Contents

Features
Tech Stack
Project Structure
Prerequisites
Installation
Running the Application
API Endpoints
Usage
Contributing
License

Features

User authentication (signup, login, JWT-based authorization)
Create, read, update, and delete posts
Comment on posts
Like/unlike posts
Follow/unfollow users
Responsive frontend with Tailwind CSS
RESTful API for seamless backend-frontend communication

Tech Stack

Backend:
Node.js
Express.js
MongoDB (with Mongoose)
JSON Web Tokens (JWT) for authentication
bcryptjs for password hashing
express-validator for input validation


Frontend:
React (with Vite)
Tailwind CSS (via @tailwindcss/postcss)
React Router for navigation
Axios for API calls


Tools:
Git for version control
npm for package management
MongoDB Atlas or local MongoDB for database
Nodemon for backend development
Vite for frontend development



Project Structure
/social-media
├── /backend
│   ├── /config
│   │   ├── database.js              # MongoDB connection setup
│   │   └── env.js                   # Environment variable configuration
│   ├── /controllers
│   │   ├── authController.js        # Handles signup, login
│   │   ├── postController.js        # Manages post CRUD
│   │   ├── commentController.js     # Manages comments
│   │   ├── likeController.js        # Handles likes
│   │   ├── followController.js      # Manages follows
│   ├── /middleware
│   │   ├── authMiddleware.js        # JWT authentication
│   │   ├── errorMiddleware.js       # Error handling
│   │   └── validator.js             # Input validation
│   ├── /models
│   │   ├── User.js                  # User schema
│   │   ├── Post.js                  # Post schema
│   │   ├── Comment.js               # Comment schema
│   │   ├── Like.js                  # Like schema
│   ├── /routes
│   │   ├── authRoutes.js            # /api/auth routes
│   │   ├── postRoutes.js            # /api/posts routes
│   │   ├── commentRoutes.js         # /api/comments routes
│   │   ├── likeRoutes.js            # /api/likes routes
│   │   ├── followRoutes.js          # /api/follow routes
│   ├── /utils
│   │   ├── logger.js                # Logging utility
│   │   ├── constants.js             # Constants
│   ├── /tests
│   │   ├── auth.test.js             # Auth tests
│   │   ├── post.test.js             # Post tests
│   ├── .env                         # Environment variables
│   ├── .gitignore                   # Git ignore file
│   ├── package.json                 # Backend dependencies
│   └── server.js                    # Express server
├── /frontend
│   ├── /public
│   │   ├── index.html               # Main HTML
│   │   └── favicon.ico              # Favicon
│   ├── /src
│   │   ├── /components
│   │   │   ├── Navbar.js            # Navigation bar
│   │   │   ├── PostCard.js          # Post display
│   │   │   ├── Comment.js           # Comment display
│   │   │   └── ProfileCard.js       # User profile
│   │   ├── /pages
│   │   │   ├── Home.js              # Newsfeed
│   │   │   ├── Profile.js           # User profile
│   │   │   ├── Login.js             # Login page
│   │   │   └── Signup.js            # Signup page
│   │   ├── /context
│   │   │   └── AuthContext.js       # Auth context
│   │   ├── /services
│   │   │   ├── api.js               # API client
│   │   │   ├── authService.js       # Auth API calls
│   │   │   └── postService.js       # Post API calls
│   │   ├── /styles
│   │   │   └── index.css            # Tailwind CSS
│   │   ├── /utils
│   │   │   └── constants.js         # Frontend constants
│   │   ├── App.js                   # Main React app
│   │   ├── index.js                 # React entry
│   │   └── setupTests.js            # Test setup
│   ├── .env                         # Frontend env vars
│   ├── .gitignore                   # Git ignore file
│   ├── package.json                 # Frontend dependencies
│   ├── tailwind.config.js           # Tailwind config
│   └── vite.config.js               # Vite config
├── .gitignore                       # Root git ignore
└── README.md                        # Project documentation

Prerequisites

Node.js (v18 or later)
MongoDB (local or MongoDB Atlas)
Git
A GitHub account for pushing to the repository
A code editor (e.g., VS Code)

Installation

Clone the Repository:
git clone https://github.com/tofik-93/social-media.git
cd social-media


Backend Setup:

Navigate to the backend directory:cd backend


Install dependencies:npm install


Create a .env file in backend/:PORT=5000
MONGO_URI=mongodb://localhost:27017/social-media-app
JWT_SECRET=your-secret-key

Replace MONGO_URI with your MongoDB Atlas URI if using a cloud database.


Frontend Setup:

Navigate to the frontend directory:cd ../frontend


Install dependencies:npm install


Create a .env file in frontend/:VITE_API_URL=http://localhost:5000/api





Running the Application

Start MongoDB:

If using local MongoDB, ensure it’s running:mongod


If using MongoDB Atlas, ensure the MONGO_URI is correct.


Run the Backend:
cd backend
npm start

The server runs on http://localhost:5000.

Run the Frontend:
cd ../frontend
npm run dev

Open http://localhost:3000 in your browser.


API Endpoints

Authentication:
POST /api/auth/signup - Register a user
POST /api/auth/login - Log in and receive a JWT


Posts:
POST /api/posts - Create a post (authenticated)
GET /api/posts - Get all posts


More endpoints (comments, likes, follows) can be added as needed.

Usage

Open http://localhost:3000 in your browser.
Sign up or log in to access the app.
Create posts, view the newsfeed, and interact with content.
Use Postman or curl to test API endpoints directly.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License.
