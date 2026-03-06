# Social Media App

A full-stack social media platform with authentication, CRUD operations, and real-time data fetching.

## Features

- User authentication (Login/Signup)
- Create, read, update, delete posts
- Like/Unlike posts
- View all posts in a feed
- Fetch posts from external API
- Loading states and welcome screen
- Responsive design with Bootstrap

## Tech Stack

- React 19 + Vite
- React Router (navigation)
- Context API (state management)
- Bootstrap 5 (styling)
- React Icons
- JSON Server (backend)
- DummyJSON API (data source)

## Quick Start

```bash
# Install dependencies
npm install
npm install -g json-server

# Run backend
npm run api

# Run frontend (in separate terminal)
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── component/
│   ├── CreatePost.jsx      # Post creation form
│   ├── PostList.jsx        # Posts feed
│   ├── PostCard.jsx        # Individual post display
│   ├── Header.jsx          # Navigation bar
│   ├── SideBar.jsx         # Side navigation
│   ├── Loading.jsx         # Loading spinner
│   └── Welcome.jsx         # Empty state
└── store/
    └── Post-List-Store.jsx # Context API store
```

## State Management

Uses React Context API for global state:
- Post list management
- Add/delete/update operations
- Loading states
- Authentication state

## API Integration

- External API: `https://dummyjson.com/posts`
- Local API: JSON Server for user data

## Login Credentials

```
Email: john@test.com
Password: 123456
```

## API Endpoints

```
GET    /users
POST   /users
GET    /posts
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
```
