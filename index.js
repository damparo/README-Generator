const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./api.js")
const generateMarkdown = require("./generateMarkdown.js")

inquirer
  .prompt(
    [
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "projectname",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "description",
        message: "please write a short description of your project?"
      },
      {
        type: "list",
        name: "license",
        message: "What Kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "Gp/3.0", "BSD3", "None"]
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username",
        
      }
    ])
  // 
  .then(function(data) {
    api.getUser(data.username).then(({
      data }) => {
      console.log(data);
      


      var filename = "README.md";

      fs.writeFileSync(filename, generateMarkdown({...data}), function(err) {
        if (err) {
          return console.log(err);
        }

        console.log("Success!");
      });
    });
  });

// const questions = [];












































// const questions = [ 

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
