const Data = [
    {
      "_id": 1,
      "customer": "John Doe",
      "orderDate": "2023-12-01T14:30:00Z",
      "items": [
        { "product": "Laptop", "quantity": 2, "price": 1200 },
        { "product": "Mouse", "quantity": 3, "price": 30 },
        { "product": "Headphones", "quantity": 1, "price": 150 }
      ],
      "shippingAddress": {
        "city": "New York",
        "state": "NY",
        "zipCode": "10001"
      }
    },
    {
      "_id": 2,
      "customer": "Jane Smith",
      "orderDate": "2023-12-02T11:45:00Z",
      "items": [
        { "product": "Phone", "quantity": 1, "price": 600 },
        { "product": "Tablet", "quantity": 2, "price": 400 }
      ],
      "shippingAddress": {
        "city": "Los Angeles",
        "state": "CA",
        "zipCode": "90001"
      }
    }
  ]

export default Data;