import requests
import json
from datetime import datetime

BASE_URL = "http://localhost:8000"

def test_get_root():
    """Test the root endpoint"""
    response = requests.get(f"{BASE_URL}/")
    print(f"Root endpoint: {response.status_code}")
    print(response.json())
    print("-" * 50)

def test_get_items():
    """Test getting all items"""
    response = requests.get(f"{BASE_URL}/api/items")
    print(f"Get items: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_get_item(item_id):
    """Test getting a specific item"""
    response = requests.get(f"{BASE_URL}/api/items/{item_id}")
    print(f"Get item {item_id}: {response.status_code}")
    if response.status_code == 200:
        print(json.dumps(response.json(), indent=2))
    else:
        print(response.text)
    print("-" * 50)

def test_create_item():
    """Test creating a new item"""
    new_item = {
        "id": 4,
        "name": "Test Item 4",
        "description": "This is a new test item created via API",
        "created_at": datetime.now().isoformat(),
        "tags": ["test", "new", "api"]
    }
    
    response = requests.post(
        f"{BASE_URL}/api/items",
        json=new_item
    )
    
    print(f"Create item: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_create_contact():
    """Test submitting the contact form"""
    contact_data = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a test message from the API test client."
    }
    
    response = requests.post(
        f"{BASE_URL}/api/contact",
        json=contact_data
    )
    
    print(f"Create contact: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_get_contacts():
    """Test getting all contact submissions"""
    response = requests.get(f"{BASE_URL}/api/contacts")
    print(f"Get contacts: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

def test_error_endpoint():
    """Test the error endpoint"""
    try:
        response = requests.get(f"{BASE_URL}/api/test/error")
        print(f"Error endpoint: {response.status_code}")
        print(response.text)
    except requests.exceptions.RequestException as e:
        print(f"Error endpoint exception: {e}")
    print("-" * 50)

def test_slow_endpoint():
    """Test the slow endpoint"""
    print("Testing slow endpoint (waiting 2 seconds)...")
    response = requests.get(f"{BASE_URL}/api/test/slow")
    print(f"Slow endpoint: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 50)

if __name__ == "__main__":
    print("Starting API tests...")
    print("=" * 50)
    
    # Run all tests
    test_get_root()
    test_get_items()
    test_get_item(1)  # Should succeed
    test_get_item(99)  # Should fail with 404
    test_create_item()
    test_create_contact()
    test_get_contacts()
    test_error_endpoint()
    test_slow_endpoint()
    
    print("All tests completed!")
    print("=" * 50) 