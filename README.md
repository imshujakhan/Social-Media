# Social Media App

A simple social media platform where users can create, view, and delete posts with real-time data fetching.

## Features

- Create new posts with title and content
- View all posts in a feed
- Delete posts
- Fetch posts from external API
- Loading states and welcome screen
- Responsive design with Bootstrap

## Tech Stack

- React 19 + Vite
- Context API (state management)
- Bootstrap 5 (styling)
- React Icons
- JSONPlaceholder API (data source)

## Quick Start

```bash
npm install
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
- Add/delete operations
- Loading states

## API Integration

Fetches initial posts from: `https://dummyjson.com/posts`
