# Social Media App - React + Authentication + CRUD

A full-featured social media application with authentication and complete CRUD operations.

## Features

- 🔐 **Authentication** - Login/Signup with protected routes
- ✏️ **Create Posts** - Add posts with title, content, and tags
- 📖 **Read Posts** - View all posts with user info
- ✏️ **Update Posts** - Edit your own posts inline
- 🗑️ **Delete Posts** - Remove your posts
- ❤️ **Like/Unlike** - Toggle likes on posts
- 📱 **Responsive** - Works on all devices
- 🎨 **Blue & White Theme** - Clean, professional design

## Tech Stack

- React 19 + React Router v7
- Bootstrap 5
- JSON Server (REST API)
- Context API (State Management)
- LocalStorage (Session)

## Quick Start

### 1. Install Dependencies
```bash
npm install
npm install -g json-server
```

### 2. Run the App
```bash
# Terminal 1 - Start API
npm run api

# Terminal 2 - Start React App
npm run dev
```

### 3. Login
```
Email: john@test.com
Password: 123456
```

## Project Structure

```
src/
├── component/          # Reusable components
│   ├── CreatePost.jsx
│   ├── PostCard.jsx
│   ├── PostList.jsx
│   ├── Header.jsx
│   ├── SideBar.jsx
│   ├── Footer.jsx
│   ├── Loading.jsx
│   ├── Welcome.jsx
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
├── pages/              # Page components
│   ├── Login.jsx
│   └── Signup.jsx
├── routes/             # App layout
│   ├── App.jsx
│   └── App.css
├── store/              # Context state
│   └── Post-List-Store.jsx
├── config/             # Configuration
│   └── api.js
├── utils/              # Helper functions
│   └── auth.js
└── main.jsx            # Entry point
```

## API Endpoints

**Base URL:** `http://localhost:3001`

```
GET    /users          - Get all users
POST   /users          - Create user
GET    /posts          - Get all posts
POST   /posts          - Create post
PUT    /posts/:id      - Update post
DELETE /posts/:id      - Delete post
```

## Features Breakdown

### Authentication
- Login with email/password
- Signup with validation
- Protected routes
- Session persistence
- Logout functionality

### CRUD Operations
- **Create** - Add new posts with form
- **Read** - View all posts in feed
- **Update** - Edit posts inline
- **Delete** - Remove posts with confirmation

### Social Features
- Like/unlike posts
- User avatars
- Post tags
- Timestamps
- User ownership validation

## Scripts

```bash
npm run dev       # Start React app
npm run api       # Start JSON Server
npm run dev:all   # Start both together
npm run build     # Build for production
```

## Test Accounts

```
john@test.com / 123456
jane@test.com / 123456
mike@test.com / 123456
sarah@test.com / 123456
```

## Troubleshooting

**Can't connect to server?**
- Make sure JSON Server is running: `npm run api`
- Check if port 3001 is available

**Port 3001 in use?**
```bash
# Change port in package.json
"api": "json-server --watch db.json --port 3002"

# Update src/config/api.js
export const API_BASE_URL = "http://localhost:3002";
```

## License

MIT - Free to use for learning and development

---

**Built with React + JSON Server** 🚀
