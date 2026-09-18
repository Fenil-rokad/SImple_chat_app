# 💬 Mongoose Chat Application

A simple **Chat CRUD Application** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

This project demonstrates how to connect a Node.js application with MongoDB using Mongoose and perform basic **CRUD (Create, Read, Update, Delete)** operations.

---

## 🚀 Features

* View all chat messages
* Create a new chat
* Edit an existing message
* Delete a chat
* Store chat data in MongoDB
* MongoDB integration using Mongoose
* Mongoose Schema and Model
* Server-side rendering using EJS
* REST-style routes
* Form method handling using Method Override
* Sample database seeding

---

## 🛠️ Technologies Used

* **Node.js** – JavaScript runtime environment
* **Express.js** – Backend web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ODM for Node.js
* **EJS** – Template engine for server-side rendering
* **Method Override** – Enables PATCH and DELETE requests from HTML forms
* **dotenv** – Loads environment variables from a `.env` file

---

## 📂 Project Structure

```text
Mongoose/
│
├── models/
│   └── chat.js
│
├── public/
│   └── ...
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── .env
├── .env.example
├── .gitignore
├── index.js
├── seed.js
├── package.json
├── package-lock.json
└── README.md
```

> The `.env` file and `node_modules` directory are not included in the repository.

---

## 📋 Prerequisites

Before running this project, make sure you have installed:

* Node.js
* npm
* MongoDB

You can verify Node.js and npm using:

```bash
node --version
npm --version
```

You should also make sure your MongoDB server is running locally.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

### 2. Navigate to the project

```bash
cd YOUR_REPOSITORY_NAME
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```text
.env
```

Add the following:

```env
MONGO_URI=mongodb://127.0.0.1:27017/itsApp
PORT=8000
```

You can also copy the provided `.env.example` file and rename it to `.env`.

### `.env.example`

```env
MONGO_URI=mongodb://127.0.0.1:27017/itsApp
PORT=8000
```

> Never commit your actual `.env` file to GitHub.

---

## 🗄️ Database

The application uses MongoDB with Mongoose.

The default local database is:

```text
itsApp
```

Default connection:

```text
mongodb://127.0.0.1:27017/itsApp
```

Make sure MongoDB is running before starting the application.

---

## 🌱 Seed Sample Data

The project contains a `seed.js` file that can be used to insert sample chat records into MongoDB.

Run:

```bash
node seed.js
```

This will populate the database with sample chat data.

If the seed script contains:

```js
await Chat.deleteMany({});
```

existing chat records will be removed before the sample data is inserted.

---

## ▶️ Run the Application

### Production/start mode

```bash
npm start
```

### Development mode

```bash
npm run dev
```

The application will run at:

```text
http://localhost:8000
```

Open the chats page:

```text
http://localhost:8000/chats
```

---

## 📦 NPM Scripts

The following scripts can be configured in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "node --watch index.js"
}
```

Run the application using:

```bash
npm start
```

or:

```bash
npm run dev
```

---

## 🧩 Chat Schema

Chat documents contain information about the sender, receiver, message, and creation date.

Example:

```js
const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    trim: true,
  },

  to: {
    type: String,
    required: true,
    trim: true,
  },

  message: {
    type: String,
    required: true,
    trim: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});
```

Example MongoDB document:

```json
{
  "_id": "68xxxxxxxxxxxxxxxxxxxxxx",
  "from": "Fenil",
  "to": "Alex",
  "message": "Hey! How are you?",
  "created_at": "2026-09-18T10:30:00.000Z"
}
```

---

## 🔄 CRUD Operations

The application demonstrates the four fundamental database operations:

| Operation | Description              |
| --------- | ------------------------ |
| Create    | Add a new chat           |
| Read      | View stored chats        |
| Update    | Edit an existing message |
| Delete    | Remove a chat            |

---

## 🛣️ Routes

| Method | Route             | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | `/chats`          | Display all chats          |
| GET    | `/chats/new`      | Show form to create a chat |
| POST   | `/chats`          | Create a new chat          |
| GET    | `/chats/:id/edit` | Show edit form             |
| PATCH  | `/chats/:id`      | Update a chat              |
| DELETE | `/chats/:id`      | Delete a chat              |

---

## 📝 Creating a Chat

A user can create a new chat by visiting:

```text
/chats/new
```

The form accepts information such as:

```text
From
To
Message
```

After submitting the form, the chat is stored in MongoDB through the Mongoose model.

---

## ✏️ Updating a Chat

Existing messages can be edited through:

```text
/chats/:id/edit
```

Mongoose updates the document using its MongoDB `_id`.

For example:

```js
await Chat.findByIdAndUpdate(
  id,
  { message },
  {
    runValidators: true,
    returnDocument: "after",
  }
);
```

`runValidators: true` ensures that schema validation is applied during the update.

---

## 🗑️ Deleting a Chat

Chats can be removed from MongoDB using:

```js
await Chat.findByIdAndDelete(id);
```

The application uses Method Override so that HTML forms can perform DELETE requests.

---

## 🧠 Concepts Practiced

This project was created to practice and understand:

* MongoDB databases
* MongoDB documents and collections
* Mongoose
* MongoDB connection using Mongoose
* Mongoose schemas
* Mongoose models
* Schema validation
* Creating documents
* Finding documents
* Updating documents
* Deleting documents
* Express routing
* RESTful routes
* EJS templates
* Dynamic route parameters
* Form handling
* Method Override
* Environment variables
* Database seeding
* CRUD application structure

---

## 🔒 `.gitignore`

The repository should contain a `.gitignore` file similar to:

```gitignore
node_modules/
.env
```

This prevents dependencies and private environment variables from being pushed to GitHub.

---

## 📦 Installing the Project on Another Machine

After cloning the repository, `node_modules` will not exist.

This is intentional.

Simply run:

```bash
npm install
```

npm reads `package.json` and `package-lock.json` and installs the required dependencies.

Then create the `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/itsApp
PORT=8000
```

Seed the database if required:

```bash
node seed.js
```

Finally:

```bash
npm start
```

---

## 🔮 Possible Future Improvements

Some features that could be added later:

* User authentication
* Login and registration
* Better error handling
* Input validation
* Flash messages
* Search functionality
* Pagination
* User profiles
* MongoDB Atlas deployment
* Responsive UI
* Real-time messaging using Socket.IO
* Deployment

---

## 🎯 Purpose of the Project

This project was developed as a learning project to understand how **MongoDB and Mongoose work with Node.js and Express.js**.

The main focus is understanding database operations and building a basic CRUD application using the MERN/backend ecosystem.

---

## 👨‍💻 Author

**Fenil Rokad**

GitHub: `Fenil-rokad`

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
