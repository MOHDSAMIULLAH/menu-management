# Menu Management Backend Server

## Overview

This project is a Node.js backend server for managing a menu that includes categories, subcategories, and items. The server provides APIs to create, read, update, and search categories, subcategories, and items. This backend service can be used in a variety of applications, such as restaurant management systems, e-commerce platforms, and more.

## Features

- Create, retrieve, and update  categories.
- Create, retrieve,  and update subcategories under a category.
- Create, retrieve, and update items under a subcategory or category.
- Search for items by name.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- Mongoose (ORM for MongoDB)
- Postman (for testing APIs)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (if using MongoDB)
- [Postman](https://www.postman.com/) (for API testing)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MOHDSAMIULLAH/menu-management
cd menu-management
```

### 2. Install Dependencies

Navigate to the project directory and run the following command to install the required Node.js packages:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/menu_management
<!-- OR Use mongoAtlas -->
MONGO_URI = "mongodb+srv://samiullah0813:samiullah0813@cluster0.8fs2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


```

Replace `MONGODB_URI` with your actual MongoDB connection string if you're using a different database.

### 4. Run the Application

Start the Node.js server with the following command:

```bash
npm start
```

The server will start on `http://localhost:5000`.

## API Endpoints

### Categories

- **Create Category**: `POST /api/categories`
- **Get All Categories**: `GET /api/categories`
- **Get Category by ID**: `GET /api/categories/:id`
- **Update Category**: `PUT /api/categories/:id`
- **Delete Category**: `DELETE /api/categories/:id`

### Subcategories

- **Create Subcategory**: `POST /api/categories/:categoryId/subcategories`
- **Get All Subcategories**: `GET /api/subcategories`
- **Get Subcategories under a Category**: `GET /api/categories/:categoryId/subcategories`
- **Get Subcategory by ID**: `GET /api/subcategories/:id`
- **Update Subcategory**: `PUT /api/subcategories/:id`
- **Delete Subcategory**: `DELETE /api/subcategories/:id`

### Items

- **Create Item**: `POST /api/subcategories/:subcategoryId/items`
- **Get All Items**: `GET /api/items`
- **Get Items under a Category**: `GET /api/categories/:categoryId/items`
- **Get Items under a Subcategory**: `GET /api/subcategories/:subcategoryId/items`
- **Get Item by ID**: `GET /api/items/:id`
- **Update Item**: `PUT /api/items/:id`
- **Delete Item**: `DELETE /api/items/:id`

### Search

- **Search Items by Name**: `GET /api/items/search?name=`

## Testing with Postman

You can use Postman to test all the above API endpoints. Import the provided `Postman_collection.json` (https://api.postman.com/collections/31005223-29d03d52-afb4-4ab9-bd0b-dfb60cd3fc76?access_key=PMAT-01J5NGYBNN7XFD311A1GCD15FB) or manually create the requests.

## Documentation

Inline comments are provided in the code for better understanding. The API endpoints are self-explanatory, and error messages guide you in case of invalid input or operations.

## Questions

### 1. Which database did you choose and why?

I chose MongoDB because of its flexibility in handling hierarchical data structures, such as categories and subcategories, without requiring complex joins. MongoDB's document-oriented storage allows for scalable and high-performance data management, which is ideal for this application.

### 2. What are 3 things you learned from this assignment?

- How to structure a Node.js project with complex relationships between models (Categories, Subcategories, Items).
- The importance of input validation and error handling in RESTful APIs.
- How to efficiently query nested resources in a NoSQL database like MongoDB.

### 3. What was the most difficult part of the assignment?

The most challenging part was designing the data model to efficiently handle the relationships between categories, subcategories, and items while maintaining flexibility for potential future changes.

### 4. What would you have done differently given more time?

With more time, I would have implemented more advanced features such as pagination for the item listings, caching for frequently accessed data, and a more detailed search functionality with filtering options.

