# 📚 Library Management API

A RESTful API built with Express, TypeScript, and MongoDB.

## 🚀 Features

- Create, Read, Update, Delete Books
- Borrow books (with validation & availability logic)
- Aggregated summary of borrow records
- Mongoose schema validation
- Instance methods and middleware
- Error handling

## 🛠️ Technologies

- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)

## 🔗 API Endpoints

| Method | Route              | Description            |
|--------|--------------------|------------------------|
| POST   | /api/books         | Create new book        |
| GET    | /api/books         | Get all books          |
| GET    | /api/books/:id     | Get single book        |
| PUT    | /api/books/:id     | Update book            |
| DELETE | /api/books/:id     | Delete book            |
| POST   | /api/borrow        | Borrow a book          |
| GET    | /api/borrow        | Get borrow summary     |

## 🧪 Testing

Use [Postman](https://www.postman.com/) to test all endpoints.

## 🧰 Setup Instructions

```bash
git clone https://github.com/Numan-Savit/library-management-api
cd library-management-api
npm install
npm run dev
