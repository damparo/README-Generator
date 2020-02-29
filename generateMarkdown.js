function generateMarkdown(data) {
    return `
    # ${data.name}
    ![github-med](https://avatars1.githubusercontent.com/u/59849741?s=400&v=4)
     
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

    ## Project Name: 
     ${data.projectname}
    ## Table of Contents:
    - [Description](#Description)
    - [Install-Dependencies]       (#Install-Dependencies)
    - [Test](#Test)
    - [Repository](#Repository)
    - [Contributing](#Contributing)
    - [Followers](#Followers)
    - [Contact](#Contact)
    - [Questions](#Questions)
    
    ## Description: 
     ${data.description}
    ## Install Dependencies: 
    \`${data.dependencies}\`
    ## Test: 
    \`${data.test}\`
    ## Repository: 
     ${data.repo}
    ## Contributing: 
     ${data.contributing}
    ## Contact: 
     ${data.email || "dennisamparo11@gmail.com"}
    
     ## [Link to deployed app]:(https://damparo.github.io/README-Generator/)
    
    ## Questions
    Contact me for further questions, thanks!
    `;


  }
  
  module.exports = generateMarkdown;
  