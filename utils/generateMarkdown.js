function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache 2.0") {
    return `## Licence
  [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "IBM-IPL 1.0") {
    return `## Licence
  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (license === "None") {
    return "";
  }
}

function generateMarkdown(response) {
  return `# ${response.title}

## Table of Contents

[ Title](#title)

[ Description](#description)

[ Installation](#installation)

[ Usage](#usage)

[ License](#license)

[ Contributing](#contributing)

[ Tests](#tests)

[ Questions](#questions)

## Repository Description

${response.description}

## Installation

*Steps required to install project and how to get the development environment running:*

${response.installation};

//  Usage section

## Usage 

*Instructions on how to use:*

${response.usage};

//  Contributing section

## Contributing

*If you would like to contribute it, you can follow these guidelines for how to do so.*

${response.contributing};
  
## Tests
  
*Tests for application and how to run them:*
  
${response.tests};

// License section 
## License

Check out the badges hosted by [shields.io](https://shields.io/).

${renderLicenseBadge(response.license)}

// Questions / About Developer section
## Questions?

For any questions, please contact me with the information below:

GitHub: ${response.username}

Email: ${response.email}
`;
}


module.exports = generateMarkdown;
