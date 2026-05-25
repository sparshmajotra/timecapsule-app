# TimeCapsule App

TimeCapsule is a modern full-stack web application that allows users to send messages, memories, or notes to their future selves. Users can create digital capsules with a future unlock date, and the content remains hidden until the selected time arrives.

The project combines clean UI design with practical full-stack development concepts including authentication, scheduling logic, database management, and deployment.

## Live Demo

Frontend Deployment:

https://timecapsule-app-eight.vercel.app/

GitHub Repository:

https://github.com/sparshmajotra/timecapsule-app

---

# Features

* Create digital time capsules
* Schedule messages for future dates
* Secure user authentication
* Clean and responsive UI
* Full-stack architecture
* Database integration
* Real-time form validation
* Mobile-friendly design
* Future message unlocking system

---

# Tech Stack

## Frontend

* React.js / Next.js
* HTML5
* CSS3
* Tailwind CSS
* JavaScript

## Backend

* Django / Django REST Framework
* REST APIs
* Authentication System

## Database

* PostgreSQL / SQLite

## Deployment

* Vercel
* Render / Railway 

---

# Project Structure

```bash id="x28k3l"
timecapsule-app/
│
├── frontend/             # Frontend application
├── backend/              # Backend application
└── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```bash id="v9a1nc"
git clone https://github.com/sparshmajotra/timecapsule-app.git
cd timecapsule-app
```

---

# Backend Setup

## Create Virtual Environment

```bash id="r84xq0"
python -m venv venv
```

## Activate Environment

### Windows

```bash id="1u0mcf"
venv\Scripts\activate
```

### Linux / Mac

```bash id="m72xla"
source venv/bin/activate
```

## Install Dependencies

```bash id="x9laa1"
pip install -r requirements.txt
```

## Run Migrations

```bash id="2kdb0m"
python manage.py migrate
```

## Start Backend Server

```bash id="a1xv8m"
python manage.py runserver
```

---

# Frontend Setup

## Install Node Modules

```bash id="y1g5pw"
npm install
```

## Run Frontend

```bash id="s9d2mx"
npm run dev
```

Frontend runs on:

```bash id="vc7r0d"
http://localhost:3000
```

Backend runs on:

```bash id="3h6l5s"
http://127.0.0.1:8000
```

---

# How It Works

1. Users create an account or log in
2. Create a new time capsule
3. Add a message or memory
4. Select a future unlock date
5. Capsule remains locked until the selected date
6. Once unlocked, users can revisit their stored memories

---

# Learning Objectives

This project helped in understanding:

* Full-stack application architecture
* API integration
* Authentication systems
* Database relationships
* Frontend and backend communication
* Deployment workflows
* State management
* Responsive UI design

---

# Future Improvements

* Email notifications on unlock
* Media upload support
* AI-generated memory summaries
* Encryption for private capsules
* Friend/shared capsules
* Countdown timers
* Push notifications
* Dark mode support
* Progressive Web App (PWA)


---

# Deployment

## Frontend

Deployed on Vercel:

https://timecapsule-app-eight.vercel.app/

## Backend

deployed on Render

https://timecapsule-backend-ucbu.onrender.com/api/

## Possible Backend Deployment Platforms

* Render
* Railway
* AWS
* DigitalOcean

---

# Author

Sparsh Majotra

GitHub:
https://github.com/sparshmajotra

