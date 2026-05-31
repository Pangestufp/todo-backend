# Todo API Backend

# Overview
REST API sederhana menggunakan Express.js untuk mengelola data Todo.
Data disimpan sementara di memory server menggunakan array JavaScript sehingga data akan hilang ketika server dihentikan atau direstart.

---

## Tech Stack

- Node.js 24.14.0
- npm 11.9.0
- Express.js 5
- CORS

---

## Requirements

- Node.js: 24.14.0
- npm: 11.9.0

---

## Project Structure

```txt
backend/
├── index.js
├── package.json
└── package-lock.json
```


---

## File Description

| File             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| index.js         | Entry point aplikasi dan seluruh endpoint REST API     |
| package.json     | Dependency management dan script aplikasi              |
| package-lock.json| Lock file dependency                                   |

---

## Installation

Repository backend:

```bash
https://github.com/Pangestufp/todo-backend
```

Clone backend:

```bash
git clone https://github.com/Pangestufp/todo-backend
```

Masuk ke folder backend:

```bash
cd todo-backend
```

Install dependency:

```bash
npm install
```

Jalankan backend:

```bash
node index.js
```

Backend akan berjalan pada:

http://localhost:3000

Pastikan backend telah berjalan sebelum menjalankan aplikasi React.

## Data Model

```Text
{
  "id": "string",
  "title": "string",
  "description": "string",
  "status": "string",
  "created_date": "string"
}
```
