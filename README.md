//Pet record API
This is a RESTful API for managing pet records using ExpressJS and Mongoose. It allows users to perform CRUD Operations like (Create, Get, Update, Delete)  on a collection of pet records.

//Project SetUp
-Open the command prompt 
-use the command   
.cd Desktop
.mkdir pets-record       (to create the folder)
-move to the vs code
.code .

After moving to the vs code  open the terminal by using the command (ctrl+j)
. npm init -y
. npm i express
. npm i mongoose

 Once the dependencies are installed and the MongoDB server is running, we can start the Express server with:
. node server.js

To check the server open the postman  to interact with API. The server should be accessible at:
. http://localhost:4001/pets 

Sample Requests
1. Create a New Pet Record
Endpoint: POST /pets
add the data to post
{
  "name": "Buddy",
  "species": "Dog",
  "age": 3,
  "ownerName": "John Doe",
  "vaccinated": true
}
Response will be
{
  "_id": "607b8c47bcf86c40e8e6c0f9",
  "name": "Buddy",
  "species": "Dog",
  "age": 3,
  "ownerName": "John Doe",
  "vaccinated": true
}
2. Get All Pet Records
Endpoint: GET /pets

Response:
json
Copy
Edit
[
{
"_id": "67f44cbb318a39451ea55c04",
"name": "Bella",
"species": "Dog",
"age": 5,
"ownerName": "Alice Smith",
"vaccinated": true
},
{
"_id": "67f44cea318a39451ea55c05",
"name": "Milo",
"species": "Cat",
"age": 3,
"ownerName": "Bob Johnson",
"vaccinated": false
}
]
3. Update a Pet Record by ID
Endpoint: PUT /pets/:id

Replace the id with the actual pet ID we want to update.

{
  "name": "Buddy Updated",
  "species": "Dog",
  "age": 4,
  "ownerName": "John Doe",
  "vaccinated": true
}
Response:
{
  "_id": "607b8c47bcf86c40e8e6c0f9",
  "name": "Buddy Updated",
  "species": "Dog",
  "age": 4,
  "ownerName": "John Doe",
  "vaccinated": true
}
4. Delete a Pet Record by ID
Endpoint: DELETE /pets/:id

Replace the id with the actual pet ID we want to delete.

Response:
{
  "message": "Pet deleted"
}
Sample Data for MongoDB
we can insert the following sample data into our MongoDB database to test the API:

[
  {
    "name": "Bella",
    "species": "Dog",
    "age": 5,
    "ownerName": "Alice Smith",
    "vaccinated": true
  }

  
