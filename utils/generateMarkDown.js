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

    //let content = ## Table of Contents;

    // if (response.installation !== '') { content += * [Installation](#installation) };
  
    // if (response.usage !== '') { content += * [Usage](#usage) };
  
    // if (response.contributing !== '') { content +=  * [Contributing](#contributing) };
  
    // if (response.licence !== '') { content +=  * [License](#license) };

    // if (response.tests !== '') { content += * [Tests](#tests) };
     
    `## Repository Description

    ${response.description}`
    
    `## Installation

    *Steps required to install project and how to get the development environment running:*
    
    ${response.installation}`;

    //  Usage section
    //if (response.usage !== '') {draftMarkdown +=
  
    `## Usage 

    *Instructions on how to use:*
    
    ${response.usage}`;

    //  Contributing section
    //if (userResponses.contributing !== '') {draftMarkdown +=
    
    `## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${response.contributing}`;

    //if (response.tests !== '') { draftMarkdown +=
      
    `## Tests
      
    *Tests for application and how to run them:*
      
    ${response.tests}`;

    // License section is required draftMarkdown +=
    `## License
  
    ${response.license}`;

    // Questions / About Developer section
    `## Questions?
  
    For any questions, please contact me with the information below:
 
    GitHub: ${response.username}

    Email: ${response.email}
  `;
}

  //add markdown
 // draftMarkdown += draftDev;

  // Return markdown
  //return content;

module.exports = generateMarkdown;
