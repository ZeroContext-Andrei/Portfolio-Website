from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import uvicorn
from datetime import datetime
import json
from typing import List, Optional

app = FastAPI(title="Project Cursor Test API")

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

class TestItem(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    created_at: datetime = datetime.now()
    tags: List[str] = []

# Test data
test_items = [
    {
        "id": 1,
        "name": "Test Item 1",
        "description": "This is the first test item",
        "created_at": datetime.now().isoformat(),
        "tags": ["test", "first", "example"]
    },
    {
        "id": 2,
        "name": "Test Item 2",
        "description": "This is the second test item",
        "created_at": datetime.now().isoformat(),
        "tags": ["test", "second"]
    },
    {
        "id": 3,
        "name": "Test Item 3",
        "description": "This is the third test item",
        "created_at": datetime.now().isoformat(),
        "tags": ["test", "third"]
    }
]

# Mock database for contact submissions
contacts = []

@app.get("/")
async def read_root():
    return {"message": "Welcome to Project Cursor Test API"}

@app.post("/api/contact", response_model=ContactResponse)
async def create_contact(contact: ContactRequest):
    # Add to mock database
    contacts.append(contact.model_dump())
    
    # Log the submission
    print(f"New contact submission from: {contact.name} <{contact.email}>")
    
    return ContactResponse(success=True, message="Test message received, thank you!")

@app.get("/api/contacts")
async def get_contacts():
    return contacts

@app.get("/api/items")
async def get_items():
    return test_items

@app.get("/api/items/{item_id}")
async def get_item(item_id: int):
    for item in test_items:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.post("/api/items")
async def create_item(item: TestItem):
    item_dict = item.model_dump()
    item_dict["created_at"] = item_dict["created_at"].isoformat()
    test_items.append(item_dict)
    return item_dict

@app.get("/api/test/error")
async def test_error():
    """Endpoint to test error handling in the frontend"""
    raise HTTPException(status_code=500, detail="This is a test error")

@app.get("/api/test/slow")
async def test_slow():
    """Endpoint to test slow responses"""
    import time
    time.sleep(2)  # Simulate a 2-second delay
    return {"message": "This response was delayed by 2 seconds"}

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True) 