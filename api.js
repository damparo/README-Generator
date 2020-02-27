const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"


    
  })
.then(function({username}){
      const queryUrl = `https://api.github.com/users/${username}`;
 
      return axios.get(queryUrl);
    
    })
    .then(function({data: repos}){
      console.log(repos);
    });
   

  


