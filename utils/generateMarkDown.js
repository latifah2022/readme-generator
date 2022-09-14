function generateMarkdown(response, userInfo) {
    var content = `# ${response.title}`

    let content = `## Table of Contents`;

    if (response.installation !== '') { content += `* [Installation](#installation)` };
  
    if (response.usage !== '') { content += `* [Usage](#usage)` };
  
    if (response.contributing !== '') { content += ` * [Contributing](#contributing)` };
  
    if (response.licence !== '') { content += ` * [License](#license)` };

    if (response.tests !== '') { content += `* [Tests](#tests)` };
     
    `# Repository Description

    ###### [Back to Table of Contents](#Table-of-Contents)

    ${response.description}`
    
    `## Installation

    *Steps required to install project and how to get the development environment running:*
    
    ${response.installation}`};

    // Optional Usage section
  if (response.usage !== '') {draftMarkdown +=`
  
  ## Usage 

    *Instructions and examples for use:*
    
    ${response.usage}`};

    // Optional Contributing section
  if (userResponses.contributing !== '') {draftMarkdown +=`
    
    ## Contributing

    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${response.contributing}`};

  if (response.tests !== '') {
  
    draftMarkdown +=`
      
    ## Tests
      
    *Tests for application and how to run them:*
      
    ${response.tests}`};

    // License section is required
  draftMarkdown +=`## License
  
  ${response.license}`;

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
