# Vet Chart - Animal Hospital EMR System (MVP)

`Vet Chart` is an Electronic Medical Record (EMR) system for the efficient management of animal hospitals. This MVP focuses on the core features of owner, patient, and medical record management.

-----

## ✨ MVP Core Features

*   **Patient and Owner Management**: Systematically register and manage owner information and their associated pets (patients).
*   **Medical Records (EMR)**: Allows veterinarians to record visit dates, symptoms, and diagnoses for each patient, and to retrieve past records.
*   **User Management**: Provides basic roles like veterinarians and staff, along with authentication for system login.

-----

## ️ Tech Stack

This project runs in a containerized environment powered by Docker.

*   **Backend**: Node.js (v18), Express, Prisma (ORM)
*   **Frontend**: React (Vite), Nginx (as web server)
*   **Database**: PostgreSQL (v16)
*   **DevOps**: Docker, Docker Compose

-----

##  Getting Started

Steps to run the project in a local development environment.

### **1. Prerequisites**

*   You must have **Docker Desktop** installed and **running** on your system.

### **2. Clone the Project**

```bash
git clone <your-repository-url>
cd vetchartUOPRASII
```

### **3. Environment Variables**

Ensure a `.env` file exists at `backend/.env` with the following content. This is required for the backend to connect to the database container.

```env
# backend/.env
DATABASE_URL="postgresql://user:password@db:5432/vetchartdb?schema=public"
```

### **4. Run the Application**

Use the modern `docker compose` command from the project's root directory to build and start all services.

```bash
# Build images and start containers in the background
docker compose up --build -d
```

After the command completes, the services will be available:

*   **Frontend**: `http://localhost:3000`
*   **Backend API**: `http://localhost:8000`

-----

##  Development Commands

*   **View Logs**: To see the real-time logs from all running containers:
    ```bash
    docker compose logs -f
    ```
*   **Stop Services**: To stop all running containers:
    ```bash
    docker compose down
    ```

-----

##  Troubleshooting

*   **Port is already in use**: If you see an error like `address already in use` for ports `8000` or `5432`, it means another service on your computer is using that port. Stop the other service and try again. This can happen if you previously ran `node server.js` manually.

*   **Docker Credential Errors**: If you encounter an error like `failed to get credentials` or `executable file not found in $PATH` while Docker is trying to pull an image, it points to an issue with your Docker Desktop installation. A common workaround is to pull the required images manually:
    ```bash
    docker pull postgres:16
    docker pull node:20-alpine
    docker pull nginx:stable-alpine
    ```
    After pulling the images, run `docker compose up --build -d` again.

-----

## MVP API Endpoints

| Feature | HTTP Method | URL | Description |
| :--- | :--- | :--- | :--- |
| **Owner** | `POST` | `/api/owners` | Register a new owner |
| **Patient** | `POST` | `/api/patients` | Register a new patient (requires `ownerId`) |
| | `GET` | `/api/patients` | Get all patients |
| | `GET` | `/api/patients/:id` | Get a specific patient's details |
| **Record**| `POST` | `/api/records` | Create a new medical record |