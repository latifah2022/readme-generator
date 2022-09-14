//node modules
const question = require('inquirer');
const fs = require('fs');
//const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js")

//Questions the user will be asked
 let questions = [
  {
    type: 'input',
    message: "What is your GitHub username? (No @ needed)",
    name: 'username',
    //default: 'connietran-dev',
    validate: (value) => {if(value){return true}else {return "value required"}}
  },
  {
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
    //default: 'readme-generator',
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
    validate: (value) => {if(value){return true}else {return "value required"}}
  },

  {
      type: 'input',
      message: 'How to install your app?',
      name: 'installation',
      validate: (value) => {if(value){return true}else {return "value required"}}
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
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'license',
      validate: (value) => {if(value){return true}else {return "value required"}}
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
    },
    // {
    //   type: 'input',
    //   message: 'What challenges did you face during t',
    //   name: 'Questions',
    // },
  ]

  // Function to write to my ReadMe.md file. //
  inquirer.prompt(questions).then((response) => {
  console.log(response);
  
   const content = generateMarkdown(response);
   console.log(content);
    fs.writeFile("./README.md", content, (err) => {
      if (err) throw err
      console.log("success");
    });
} ); 

//a function to initialize app
function init() {
  return inquirer.prompt(questions).then((response) => {
    writeToFile("GENERATED-README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();




  // .then(response =>{
  //   //fs.writeFile(file, data[, options], callback)
  //   fs.writeFile('index.html', response, ife);
  // })  

//   function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//           return console.log(err);
//         }
      
//         console.log("Success! Your README.md file has been generated")
//     });
// }

//   validate: function (answer) {
//     if (answer.length < 1) {
//         return console.log("A valid GitHub username is required.");
//     }
//     return true;
// }



//https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>