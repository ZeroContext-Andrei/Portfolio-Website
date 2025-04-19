from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import uvicorn

app = FastAPI(title="Project Cursor API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    message: str = Field(..., min_length=10)

class ContactResponse(BaseModel):
    success: bool
    message: str

# Mock database
contacts = []

@app.get("/")
async def read_root():
    return {"message": "Welcome to Project Cursor API"}

@app.post("/api/contact", response_model=ContactResponse)
async def create_contact(contact: ContactRequest):
    # Add to mock database
    contacts.append(contact.model_dump())
    
    # In a real app, you might send an email or store in a database
    return ContactResponse(success=True, message="Message received, thank you!")

@app.get("/api/contacts")
async def get_contacts():
    # This would normally require authentication
    return contacts

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 