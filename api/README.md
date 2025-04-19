# Project Cursor API

A simple Python FastAPI backend for the Project Cursor application.

## Features

- Contact form submission endpoint
- REST API architecture
- Input validation with Pydantic

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the server:
   ```
   python main.py
   ```

The API will be available at http://localhost:8000

## API Endpoints

- `GET /` - Welcome message
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (for demonstration purposes)

## Documentation

When the server is running, visit:
- http://localhost:8000/docs - Swagger documentation
- http://localhost:8000/redoc - ReDoc documentation 