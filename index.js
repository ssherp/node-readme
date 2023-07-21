// TODO: Include packages needed for this application
//add a package that would import generate fill
//export from "badmath"
//to import we will use request key word example: const badmath=require('./badmath.js') 15-16 in repo
const inquirer= require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is your title?",
    },
    {
        type: "input",
        name: "description",
        message: "description of your project?",
    },
    {
        type: "list",
        name: "license",
        message:"choose your license?",
        choices:["MIT","IBM","Apache","boost"]
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName,data) {
fs.writeFileSync(fileName,data)
    //create the README
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
       
        writeToFile("README.md",generateMarkdown(data))
    })
    //ask the user questions
    //we need to save answer
    //create content for the readme function generate markdown 
    // call generate markdown function 
    // call writeToFile 
    //insert object to answers
    

}

// Function call to initialize app
init();


//var result= init()