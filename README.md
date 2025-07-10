# Vet Chart - Animal Hospital EMR System (MVP)

`Vet Chart` is an Electronic Medical Record (EMR) system for the efficient management of animal hospitals. The MVP version focuses on the core features of managing owner and patient information, and medical records.

-----

## ✨ MVP Core Features

*   **Patient and Owner Management**: Systematically register and manage owner information and their associated pets (patients).
*   **Medical Records (EMR)**: Allows veterinarians to record visit dates, symptoms, and diagnoses for each patient, and to retrieve past records.
*   **User Management**: Provides basic roles like veterinarians and staff, along with authentication for system login.

-----

## ️ Future Updates

*   **Appointment Management System**: Functionality to create and manage appointments by date/time and track their status (Scheduled, Completed, Canceled).
*   **Invoicing System**: A feature to automatically generate invoices based on medical services and track payment status.
*   **Service Item Management**: Functionality to manage service items and prices, such as treatments and medications offered by the hospital.
*   **Customer Notification Feature**: Integration of an automatic notification system (SMS/Email) for appointment reminders, vaccination schedules, etc.

-----

## ️ Tech Stack

This project is designed for each service to run independently in a containerized environment based on Docker.

*   **Backend**: Node.js, Express, Prisma (ORM), PostgreSQL (Database)
*   **Frontend**: React (or Vue.js), Nginx (Web Server)
*   **DevOps**: Docker, Docker Compose

-----

##  Getting Started

Steps to run the project in a local environment.

### **1. Prerequisites**

*   You must have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

### **2. Clone the Project**

```bash
git clone <your-repository-url>
cd vetchartUOPRASII
```

### **3. Set Environment Variables**

Create a `.env` file in the `backend` folder and enter the database connection information.

`backend/.env`
```env
# PostgreSQL Database Connection Info
# Must match the values set for the db service in the docker-compose.yml file.
DATABASE_URL="postgresql://user:password@db:5432/vetchartdb?schema=public"
```

### **4. Run the Application**

Run the command below in the project root directory to start all services.

```bash
# Build the images and run the containers in the background.
docker-compose up --build -d
```

If the application starts successfully, you can access it at the following addresses:

*   **Frontend**: `http://localhost:3000`
*   **Backend API**: `http://localhost:8000`

-----

##  MVP API Endpoints

A list of core API endpoints to be implemented in the MVP version.

| Feature | HTTP Method | URL | Description |
| :--- | :--- | :--- | :--- |
| **Authentication** | `POST` | `/api/auth/register` | Register |
| | `POST` | `/api/auth/login` | Login |
| **Patient** | `POST` | `/api/patients` | Register new patient |
| | `GET` | `/api/patients` | Get all patients |
| | `GET` | `/api/patients/:id` | Get specific patient info |
| **Medical Record**| `POST` | `/api/records` | Create new medical record |
| | `GET` | `/api/patients/:patientId/records` | Get medical records for a specific patient|
