function generateMarkdown(response) {
  return 
    `# ${response.title}`

    `## Table of Contents

   -[ Title](#title)
   -[ Description](#description)
   -[ Installation](#installation)
   -[ Usage](#usage)
   -[ License](#license)
   -[ Contributing](#contributing)
   -[ Tests](#tests)
   -[ Questions](#questions)`

    `## Repository Description

    ${response.description}`
    
    `## Installation

    *Steps required to install project and how to get the development environment running:*
    
    ${response.installation}`;

    //  Usage section
  
    `## Usage 

    *Instructions on how to use:*
    
    ${response.usage}`;

    //  Contributing section
    
    `## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${response.contributing}`;
      
    `## Tests
      
    *Tests for application and how to run them:*
      
    ${response.tests}`;

    // License section 
    `## License

    Check out the badges hosted by [shields.io](https://shields.io/).
  
    ${response.license}`;

    // Questions / About Developer section
    `## Questions?
  
    For any questions, please contact me with the information below:
 
    GitHub: ${response.username}

    Email: ${response.email}
  `;
}


module.exports = generateMarkdown;
