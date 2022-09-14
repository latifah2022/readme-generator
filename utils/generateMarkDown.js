function generateMarkdown(userResponses, userInfo) {
    var content = `# ${response.title}`

    let content = `## Table of Contents`;

    if (userResponses.installation !== '') { content += `* [Installation](#installation)` };
  
    if (userResponses.usage !== '') { content += `* [Usage](#usage)` };
  
    if (userResponses.contributing !== '') { content += ` * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { content += ` * [License](#license)` };

     
    `# Repository Description

    ###### [Back to Table of Contents](#Table-of-Contents)

    ${response.description}`
    
    `## Installation

    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`};

    // Optional Usage section
  if (userResponses.usage !== '') {draftMarkdown +=`
    
    ## Usage 

    *Instructions and examples for use:*
    
    ${userResponses.usage}`};

    // Optional Contributing section
  if (userResponses.contributing !== '') {draftMarkdown +=`
    
    ## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`};

  if (userResponses.tests !== '') {
  
    draftMarkdown +=`
      
    ## Tests
      
    *Tests for application and how to run them:*
      
    ${userResponses.tests}`};

    // License section is required
  draftMarkdown +=`## License
  
  ${userResponses.license}`;

  // Questions / About Developer section
  let draftDev = `---
  
  ## Questions?
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  //add markdown
 // draftMarkdown += draftDev;

  // Return markdown
  return content;


module.exports = generateMarkdown;
