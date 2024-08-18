## Prerequisites
- Node.js
- MongoDB

# Follow the steps properly to run the project successfully

- Clone the repository
  
```bash
    git clone https://github.com/Aritra212/fullStackAssignment.git
```
Now first let's try to run the backend first.

## Steps to run the backend properly

- For the database open your MongoDB and create a **cluster** then within the cluster create a new **database** with a collection named **cards** (do not change the collection name otherwise you need to change the backend also).
- After creating the database get the connection URL ( e.g. mongodb+srv://**username**:**password**@cluster0.occop3z.mongodb.net/**databasename**?retryWrites=true&w=majority&appName=Cluster0 )
- Open the cloned repository in VS Code (you can use other IDEs also).
- Go to the backend folder and create a **.env** file. Now open the file and add two variables. Don't change the name of the variable just change the values according to your need.
  
  ```bash
    PORT= 8000 
    MONGODB_URL = "paste your MongoDB connection URL here"
  ```
- Next, open a new Terminal and execute the following commands to run the backend
  
  ```bash
    cd ./backend
    npm i
    npm start
  ```

Now move on to the frontend setup.

## Steps to run the frontend properly.

- Go to the frontend folder and create a **.env** file. Now open the file and add a variable. Don't change the name of the variable just change the port number if you change the backed port number (e.g. 8000) otherwise just paste the following text as it is.
  
  ```bash
    VITE_BACKEND_URL = 'http://127.0.0.1:8000/api/v1'
  ```
- Next, open a new Terminal and execute the following commands to run the frontend
  
  ```bash
    cd ./frontend
    npm i
    npm run dev
  ```

**Note** - For adding the data fast, you can use the data.js file. Click the "Submit request" button from the frontend and paste the data there one by one.
If you face any problem to run the project contact me - **aritrapaulpc@gmail.com**
