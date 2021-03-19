// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project.',
  },
  {
    type: 'input',
    name: 'dependency',
    message: 'What are your dependencies?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Have you tested your project?',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'Enter your Email',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can you contribute?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName,data, (err) => err ? console.log
  (err): console.log ("File Created"))
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
