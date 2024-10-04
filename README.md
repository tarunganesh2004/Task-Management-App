# Task Management App

This is a full-stack Task Management application that allows users to manage their to-do tasks. Users can create, view, update, and delete tasks. The application is built using **Node.js**, **Express**, and **MySQL** for the backend, and **React** with **Bootstrap** for the frontend. The project is containerized using **Docker** to ensure smooth development and deployment.

## Features

- **User Management**: Currently, the application uses a hardcoded user ID for demo purposes. Full user management will be implemented in future updates.
- **Task Management**: Users can create, view, update, and delete tasks with the following fields:
  - Title
  - Description
  - Due date
  - Status (e.g., pending, completed)
- **Responsive Design**: The user interface is designed with Bootstrap to ensure a clean and responsive experience across devices.
- **RESTful API**: Built with Node.js and Express, exposing endpoints for managing users and tasks.
- **Dockerized Setup**: The application uses Docker and Docker Compose for easy setup and consistent development and deployment environments.

## Tech Stack

- **Backend**: 
  - Node.js
  - Express
  - MySQL
- **Frontend**:
  - React
  - Bootstrap
  - Axios (for HTTP requests)
- **Database**: MySQL
- **Containerization**: Docker, Docker Compose

## Prerequisites

To run this project, you will need:

- **Docker** and **Docker Compose** installed
- Optionally, Node.js and npm (if you wish to run the application without Docker)

## Getting Started

### 1. Clone the repository

```bash
git clone <https://github.com/tarunganesh2004/Task-Management-App.git>
cd Task-Management-App
```

### 2. Set up environment variables

Create a `.env` file in the `backend/` folder with the following content:

```makefile
DB_HOST=mysql
DB_USER=root
DB_PASS=password
DB_NAME=your_db_name
PORT=5000
```
### 3. Start the application with Docker

```bash
docker-compose up --build
```
This will start the backend server, the MySQL database, and create the necessary tables. The backend API will be accessible at `http://localhost:5000`.

### 4. Access the frontend

Run the frontend in a separate terminal window:

```bash
cd frontend
npm install
npm start
```
The frontend will be accessible at `http://localhost:3000`.

## API Endpoints

The application provides the following API endpoints:

- **GET /api/users/:userId/tasks**: Retrieve all tasks for a specific user.
- **POST /api/users/:userId/tasks**: Create a new task for a user.
- **PUT /api/tasks/:taskId**: Update a task by its ID.
- **DELETE /api/tasks/:taskId**: Delete a task by its ID.

## Future Improvements

- **User Authentication and Authorization**: Implement user login and role-based access control.
- **Task Prioritization and Filtering**: Add the ability to prioritize tasks and filter them by status or due date.
- **Notifications**: Send reminders for upcoming task due dates.


