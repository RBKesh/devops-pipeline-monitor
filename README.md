# 🚀 DevOps Pipeline Monitor

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.103-green)
![Nginx](https://img.shields.io/badge/Nginx-Proxy-red)

A real-time DevOps dashboard that monitors system metrics (CPU/RAM) via WebSockets and integrates with the GitHub API to display recent CI/CD pipeline runs. Features a sleek, GitHub-inspired dark mode UI.

## 🌟 Features
- **Live System Metrics:** Real-time updates of CPU and memory usage sent over WebSockets.
- **GitHub Actions Integration:** Fetches and displays recent workflow runs, statuses, and conclusions.
- **Data Visualization:** Built-in charts and gauges using Recharts.
- **Reverse Proxy:** Uses Nginx to route traffic cleanly between the React frontend and FastAPI backend.

## 🏗️ Architecture
```
    [Browser]
        | (Port 80)
    [ Nginx ]
    /       \
  /api, /ws   \ / (static/React)
 [ FastAPI ]  [ React Dev Server ]
```

## 📸 Screenshots
*(Placeholder for UI screenshots)*

## 🚀 Quick Start
1. Clone the repository.
2. Ensure you have Docker and Docker Compose installed.
3. Run `docker-compose up --build`
4. Visit `http://localhost`

## ⚙️ Environment Variables
| Variable | Description |
|---|---|
| `GITHUB_TOKEN` | (Optional) GitHub Personal Access Token to avoid rate limits |

## 🛠️ Tech Stack
- Frontend: React, Recharts, Axios, Custom CSS
- Backend: FastAPI, psutil, websockets, httpx
- Infrastructure: Docker, Docker Compose, Nginx

## 📄 License
MIT License 2024 Rishi B (RBKesh)
