# Blogging Platform Roadmapsh

A full-stack blogging platform built with a React + Vite frontend and an Express + MongoDB backend. The app lets users create blog posts, view all saved posts, edit existing posts, and delete posts.

Project reference:

- [https://roadmap.sh/projects/blogging-platform-api](https://roadmap.sh/projects/blogging-platform-api)

## Overview

This project is split into two parts:

- `frontend/` contains the React application used by readers and writers.
- `backend/` contains the Express API, MongoDB model, and server-rendered EJS form used for blog creation.

The frontend fetches blog data from the backend using the environment variable `VITE_BASE_URL`. The backend stores blog documents in MongoDB using Mongoose.

## Features

- View all blog posts from the database
- Create a new blog post
- Edit an existing blog post
- Delete a blog post
- Responsive UI built with Tailwind CSS
- Express backend with MongoDB persistence
- EJS-based server-rendered create blog page

## Tech Stack

- Frontend: React, Vite, React Router DOM, Tailwind CSS
- Backend: Node.js, Express, EJS, CORS, dotenv
- Database: MongoDB with Mongoose

## Project Structure

```text
.
├── backend
│   ├── controllers
│   │   └── blogsController.js
│   ├── models
│   │   └── blogsModel.js
│   ├── partials
│   │   └── header.ejs
│   ├── public
│   │   └── script.js
│   ├── routes
│   │   └── routes.js
│   ├── views
│   │   ├── createBlogs.ejs
│   │   └── home.ejs
│   ├── index.js
│   └── package.json
├── frontend
│   ├── components
│   │   └── Header.jsx
│   ├── public
│   └── src
│       ├── pages
│       │   ├── Home.jsx
│       │   └── CreateBlogs.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
└── README.md
```

## How It Works

### Backend

The backend is an Express server that:

- connects to MongoDB using `MONGODB_URI`
- exposes blog routes through `backend/routes/routes.js`
- uses Mongoose to store blog documents

The blog schema currently contains:

- `username`
- `post`

Available backend routes:

- `GET /blogs` returns all blogs as JSON
- `GET /create-post` renders the server-side blog creation page
- `POST /` creates a new blog
- `PATCH /` updates a blog post by `blogId`
- `DELETE /` deletes a blog post by `blogId`

### Frontend

The frontend is a React single-page app with two routes:

- `/` shows all blog posts
- `/create-blog` shows the blog creation form

The home page:

- loads posts from the backend
- displays them in a responsive card layout
- supports edit and delete actions

The create page:

- collects `username` and `post`
- sends the data to the backend
- redirects back to the home page after publishing

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/MuhammadWaqar7615/blogging-plateform-roadmapsh.git
cd blogging-platform-roadmapsh
```

### 2. Configure the backend

Create a `.env` file inside `backend/` with your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Start the backend server

```bash
npm start
```

The backend runs on:

```text
http://localhost:3000
```

### 5. Install frontend dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Configure the frontend environment

Create a `.env` file inside `frontend/`:

```env
VITE_BASE_URL=http://localhost:3000
```

### 7. Start the frontend

```bash
npm run dev
```

The frontend usually runs on:

```text
http://localhost:5173
```

## Scripts

### Backend

- `npm start` starts the Express server with Nodemon

### Frontend

- `npm run dev` starts the Vite development server
- `npm run build` builds the app for production
- `npm run preview` previews the production build
- `npm run lint` runs ESLint

## API Notes

The frontend expects the backend to be available at `VITE_BASE_URL`. If the backend URL changes, update the frontend `.env` file.

Blog update and delete operations send a blog identifier in the request body as `blogId`.

## Important Implementation Details

- The backend uses `express.urlencoded()` and `express.json()` to parse incoming data.
- CORS is enabled so the frontend can call the API from a different origin during development.
- The backend currently listens on port `3000`.
- Blog editing is handled from the frontend by opening a modal, updating the text, and sending a `PATCH` request.

## Future Improvements

- Add validation for blog form fields
- Add loading and error states in the frontend
- Improve edit flow so each card opens its own dedicated editor state
- Add authentication and user accounts
- Add pagination or infinite scroll for larger collections
- Add tests for backend routes and frontend components

## License

This project currently uses the `ISC` license as defined in the package files.
