//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

//Questions the user will be asked
 let questions = [
  {
    type: 'input',
    message: "What is your GitHub username? (No @ needed)",
    name: 'username',
    validate: (value) => {if(value){return true}else {return "value required"}}
  },
  {
    type: 'input',
    message: "What is your email",
    name: 'email',
    validate: (value) => {if(value){return true}else {return "value required"}}
  },
  {
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
    validate: (value) => {if(value){return true}else {return "value required"}}
  },
  {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
    validate: (value) => {if(value){return true}else {return "value required"}}
  },
  {
    type: 'input',
    message: "Write a description of your project.",
    name: 'description',
    default: 'Project Description',
    //validate: (value) => {if(value){return true}else {return "value required"}}
  },

  {
      type: 'input',
      message: 'How to install your app?',
      name: 'installation',
      //validate: (value) => {if(value){return true}else {return "value required"}}
    },
    {
      type: 'input',
      message: 'How to use your app?',
      name: 'usage',
      //validate: (value) => {if(value){return true}else {return "value required"}}
    },
    {
      type: 'checklist',
      message: 'What licenses did you use?',
      choices: ["MIT", "Apache 2.0", "IBM-IPL 1.0", "None"],
      name: 'license',
      //validate: (value) => {if(value){return true}else {return "value required"}}
    },
    {
      type: "input",
      message: "Please list any contributors. (Use GitHub usernames)",
      name: "contributors",
      //validate: (value) => {if(value){return true}else {return "value required"}}
    },
    {
      type: 'input',
      message: 'If applicable, provide any tests written for your application and provide examples on how to run them',
      name: 'Tests',
      //validate: (value) => {if(value){return true}else {return "value required"}}
    },
  ]

//   // Function to write to my ReadMe.md file. //
//   inquirer.prompt(questions).then((response) => {
//   console.log(response);
  
//    const content = generateMarkdown(response);
//    console.log(content);
//     fs.writeFile("./README.md", response, (err) => {
//       err
//       ? console.log(err)
//       : console.log("success");
//     });
// } ); 

//a function to initialize app
function init() {
  return inquirer.prompt(questions).then((response) => {
    //content("README.md", generateMarkdown(response));
    fs.writeFile("./README.md", generateMarkdown(response), (err) => {
           err
         ? console.log(err)
           : console.log("success");
         });
  });
}

// Function call to initialize app
init();




//https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>