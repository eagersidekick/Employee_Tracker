const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

const inquirer = require('inquirer');


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

//inquirer prompt
const userPrompts = () => (
  inquirer.prompt([
    {
    type: 'input',
    name: 'command',
    message: 'What can I help you with?',
    choices: ["View Employees", "Add Employee", "Update Employee Role", "View Roles", "View Departments", "Add Department"]
    }
    ])
    //functions to deal with choices
  .then((answers) => {
    const { choices } = answers; 

    if (choices === "View Employees") {
      viewEmployees();
    }

    if (choices === "Add Employee") {
      addEmployee();
    }

    if (choices === "Update Employee Role") {
      updateEmployee();
    }

    if (choices === "View Roles") {
      viewRoles();
    }

    if (choices === "View Departments") {
      viewDepartments();
    }

    if (choices === "Add Departments") {
      addDepartments();
    };
}));




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
