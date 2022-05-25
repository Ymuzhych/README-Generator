// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const utils = require('./utils/generateMarkdown')
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    },{
        type: "input",
        message: "What is the description of your project? ",
        name: "Description"
    },{
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"
    },{
        type: "input",
        message: "What does user need to install the app?",
        name: "Installation"
    },{
        type: "input",
        message: "Instraction how to use app?",
        name: "Usage"
    },{
        
        type: "list",
        name: "License",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Who contributed to the project?",
        name: "Contributing"

    },{
        type: "input",
        message: "What commands are needed to run this project?",
        name: "Tests"
    },{
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    },{
        type: "input",
        message: "What is Github username?",
        name: "Username"
    },{
        type: "input",
        message: "What is email address?",
        name: "Email",
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}
// Function call to initialize app
init();