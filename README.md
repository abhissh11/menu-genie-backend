# 🍽️ Menu Genie — Node.js Backend Assignment

A simple **Menu Management Backend API** built using **Node.js, Express.js, and MongoDB**.  
It allows you to create, read, update, and search through **Categories**, **Subcategories**, and **Items** — ideal for restaurant menu systems or inventory management.

## Live 
```bash
https://menu-genie-backend.onrender.com/
```

---

## 🚀 Features

✅ Create, Get, and Edit  
- **Categories**  
- **Subcategories** (linked to categories)  
- **Items** (linked to either category or subcategory)

✅ Search  
- Search items by name (case-insensitive)

✅ Relationships  
- One Category → Many Subcategories  
- One Subcategory → Many Items  

✅ Automatic Amount Calculation  
- `totalAmount = baseAmount - discount`

✅ Proper REST API structure  
- Clean controllers, routes, and models  
- Inline comments and meaningful responses

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Environment** | dotenv |
| **CORS** | Enabled |
| **Language** | JavaScript (ES Modules) |

---

## 📂 Project Structure

menu-genie/
├── server.js
├── package.json
├── .env
├── config/
│   └── db.js
├── models/
│   ├── Category.js
│   ├── SubCategory.js
│   └── Item.js
├── controllers/
│   ├── categoryController.js
│   ├── subCategoryController.js
│   └── itemController.js
└── routes/
    ├── categoryRoutes.js
    ├── subCategoryRoutes.js
    └── itemRoutes.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/menu-genie.git
cd menu-genie
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Install dependencies
 ```bash
 npm install
```
## Create environment file .env
``` bash
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
```
## Run the server
```bash
npm run dev
```
## API Documentation

| Method   | Endpoint              | Description                         |
| -------- | --------------------- | ----------------------------------- |
| **POST** | `/api/categories`     | Create a new category               |
| **GET**  | `/api/categories`     | Get all categories                  |
| **GET**  | `/api/categories/:id` | Get a single category by ID or name |
| **PUT**  | `/api/categories/:id` | Edit a category                     |

## Example Body (POST /api/categories)
```bash
{
  "name": "Beverages",
  "image": "https://example.com/beverages.jpg",
  "description": "Refreshing drinks including juices, sodas, and more.",
  "taxApplicability": true,
  "tax": 5,
  "taxType": "percentage"
}
```
## Subcategory Routes
| Method   | Endpoint                                  | Description                           |
| -------- | ----------------------------------------- | ------------------------------------- |
| **POST** | `/api/subcategories`                      | Create a subcategory under a category |
| **GET**  | `/api/subcategories`                      | Get all subcategories                 |
| **GET**  | `/api/subcategories/category/:categoryId` | Get subcategories under a category    |
| **PUT**  | `/api/subcategories/:id`                  | Edit subcategory details              |

## Example Body (POST /api/subcategories)
```bash
{
  "name": "Cold Drinks",
  "image": "https://example.com/cold-drinks.jpg",
  "description": "Iced beverages like soda and cola.",
  "category": "673888d4b3a0e86a236bb5b1",
  "taxApplicability": false,
  "tax": 0
}
```
## 🍔 Item Routes
| Method   | Endpoint                                | Description                                 |
| -------- | --------------------------------------- | ------------------------------------------- |
| **POST** | `/api/items`                            | Create item under a category or subcategory |
| **GET**  | `/api/items`                            | Get all items                               |
| **GET**  | `/api/items/category/:categoryId`       | Get all items under a category              |
| **GET**  | `/api/items/subcategory/:subCategoryId` | Get all items under a subcategory           |
| **GET**  | `/api/items/:id`                        | Get a specific item by ID or name           |
| **GET**  | `/api/items/search?name=coke`           | Search items by name                        |
| **PUT**  | `/api/items/:id`                        | Edit item details                           |

## Example Body (POST /api/items)

```bash
{
  "name": "Coca Cola 500ml",
  "image": "https://example.com/cocacola.jpg",
  "description": "Classic Coca Cola served chilled.",
  "category": "673888d4b3a0e86a236bb5b1",
  "subCategory": "67388c56b3a0e86a236bb5b7",
  "taxApplicability": true,
  "tax": 5,
  "baseAmount": 50,
  "discount": 5
}
```
## Search API Example

```bash
GET /api/items/search?name=coca
```
## GET Routes Summary

| Purpose                      | Method | Endpoint                                  |
| ---------------------------- | ------ | ----------------------------------------- |
| All Categories               | GET    | `/api/categories`                         |
| Single Category by ID/Name   | GET    | `/api/categories/:id`                     |
| All Subcategories            | GET    | `/api/subcategories`                      |
| Subcategories under Category | GET    | `/api/subcategories/category/:categoryId` |
| All Items                    | GET    | `/api/items`                              |
| Items under Category         | GET    | `/api/items/category/:categoryId`         |
| Items under Subcategory      | GET    | `/api/items/subcategory/:subCategoryId`   |
| Single Item by ID/Name       | GET    | `/api/items/:id`                          |
| Search Item by Name          | GET    | `/api/items/search?name=<keyword>`        |

## Short Answers Asked

- Q1. Which database did you choose and why?
 I chose MongoDB because it handles hierarchical and nested data very efficiently, allows flexible schema design, and integrates seamlessly with Node.js through Mongoose ORM.

- Q2. Three things you learned from this assignment:

Building relational data models in MongoDB using ref fields.

Setting default values dynamically from parent documents (like category tax).

Structuring a maintainable Express.js backend with modular routes and controllers.

- Q3. Most difficult part of the assignment:
Managing relational consistency between Category → Subcategory → Item while keeping it flexible and avoiding data duplication.

- Q4. What would you have done differently with more time?

1. Implement JWT Authentication for admin access.

2. Add Swagger or Postman documentation for live API testing.

3. Integrate validation using Zod or Joi for cleaner request validation.
